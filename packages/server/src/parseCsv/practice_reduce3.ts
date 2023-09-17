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

const result = csvForms.reduce((acc: Props[], val: Props, index: number) => {
  if (val.value === '100') {
    acc.push({ ...val });
  }
  return acc;
}, []);

console.log(result);
