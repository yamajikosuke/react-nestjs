import * as csvParse from 'csv-parse/lib/sync';
import { readFileSync } from 'fs';
import { post } from 'request';

import { FormProps, TextFieldProps, FieldProps } from './formProps';

const filePath = './data/form_test.csv';
const data = readFileSync(filePath);
const csvForms = csvParse(data, {
  columns: true,
  skip_empty_lines: true,
});
const arr = [11, 22, 33];
const initial = {};
const result = arr.reduce((acc, val, index) => {
  console.log({ ...acc });
  console.log(index, acc === initial);
  return acc;
}, initial);
console.log(result, initial);
console.log('result', result === initial);
