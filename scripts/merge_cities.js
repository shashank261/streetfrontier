import XLSX from 'xlsx';
import fs from 'fs';

const filePath = '/Users/shashank/workspace/streetfrontier/data/CLASS_I.xlsx';
const jsonPath = '/Users/shashank/workspace/streetfrontier/src/data/city-population.json';

const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

const currentData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const cityMap = new Map();
currentData.forEach(item => {
    cityMap.set(item.City, item.Population);
});

let currentParentCity = null;
let addedCount = 0;

for (let i = 4; i < data.length; i++) {
    const row = data[i];
    const slNo = row[0];
    const cityName = row[1];
    const censusYear = row[3];
    const persons = row[6];

    if (slNo !== null && typeof slNo === 'number') {
        currentParentCity = cityName;
    }

    if (currentParentCity && censusYear === 2011 && persons) {
        // Ensure currentParentCity is a string before trimming
        const parentNameStr = typeof currentParentCity === 'string' ? currentParentCity : String(currentParentCity);
        const isSubcategory = cityName && typeof cityName === 'string' && cityName.trim().match(/^\([a-z0-9]+\)/);

        if (!isSubcategory) {
            const cleanedParentName = parentNameStr.trim();
            if (cleanedParentName && !cityMap.has(cleanedParentName)) {
                cityMap.set(cleanedParentName, persons);
                addedCount++;
                console.log(`Adding: ${cleanedParentName} - ${persons}`);
            }
        }
    }
}

console.log(`Total cities added: ${addedCount}`);

const updatedData = Array.from(cityMap.entries()).map(([City, Population]) => ({
    City,
    Population
}));

updatedData.sort((a, b) => a.City.localeCompare(b.City));

// To actually save, uncomment the line below
fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2));
