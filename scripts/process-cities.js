import pkg from 'xlsx';
const { readFile, utils } = pkg;
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'data/city-list.xlsx');
const outputPath = path.join(process.cwd(), 'src/data/city-population.json');

console.log('Reading Excel file...');
try {
    const workbook = readFile(inputPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert to JSON objects based on headers
    console.log('Converting to JSON objects...');
    const data = utils.sheet_to_json(worksheet);

    console.log('Filtering and mapping data...');
    const processedData = data
        .filter(row => row.Level === 'TOWN')
        .map(row => ({
            City: row.Name,
            Population: row.TOT_P
        }));

    console.log(`Processed ${processedData.length} towns.`);

    // Ensure directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(processedData, null, 2));
    console.log(`Successfully saved data to ${outputPath}`);
} catch (error) {
    console.error('Error processing data:', error);
    process.exit(1);
}
