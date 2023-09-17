import * as csvParse from 'csv-parse/lib/sync';
import { readFileSync } from 'fs';

const filePath = './data/sample.csv';
const data = readFileSync(filePath);

type Props = {
  id: number;
  name: string;
  value: string;
};

const csvForms: Props[] = csvParse(data, {
  columns: true,
  skip_empty_lines: true,
});

const result = csvForms.some(item => {
  return Number(item.value) > 100;
});

console.log(result);
