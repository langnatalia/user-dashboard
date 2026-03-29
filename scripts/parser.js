// parser.js
import { parse } from 'csv-parse';
import { promisify } from 'util';

const parseAsync = promisify(parse);

export async function parseFile(filePath) {
    const data = await parseAsync(filePath, {
        comment: '#',
        trim: true,
        columns: true
    });

    return data;
}