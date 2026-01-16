import XLSX from 'xlsx';

const filePath = '/Users/shashank/workspace/streetfrontier/data/CLASS_I.xlsx';
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('Sheet Name:', sheetName);
console.log('Row 4301:');
console.log(`Row 4301:`, JSON.stringify(data[4301]));
