import pkg from 'xlsx';
const { readFile, utils } = pkg;
import path from 'path';

const filePath = path.join(process.cwd(), 'data/city-list.xlsx');
try {
    const workbook = readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = utils.sheet_to_json(worksheet, { header: 1 });

    if (data.length > 0) {
        console.log('All Headers:', data[0]);
    }
} catch (error) {
    console.error('Error:', error);
}
