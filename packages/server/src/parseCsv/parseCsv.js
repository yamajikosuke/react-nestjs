const fs = require('fs');
var Papa = require('papaparse');
var csv = require('csv-parse/lib/sync');
var csvParser = require('csv-parser');
var request = require('request');
const results = [];

// const csv = 'data1,data2,data3';
// var data = Papa.parse(csv);
// console.log(data);
const file = './sample.csv';
const data = fs.readFileSync(file);
const items = csv(data, {
  columns: true, //https://csv.js.org/parse/options/columns/
  skip_empty_lines: true,
});
console.log(items);

//csv-parser
// fs.createReadStream(file)
//   .pipe(csvParser())
//   .on('data', data => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     results.forEach(result => {
//       var options = {
//         uri: 'http://localhost:3000/todos/register',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         json: result,
//       };
//       request.post(options, function(error, response, body) {
//         console.log('error:', error);
//       });
//     });
//   });

// Papa.parse(fs.createReadStream(file), {
//   header: true,
//   complete: function(results) {
//     console.log(results);
//     results.data.forEach(result => {
//       var options = {
//         uri: 'http://localhost:3000/todos/register',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         json: result,
//       };
//       request.post(options, function(error, response, body) {
//         console.log('error:', error);
//       });
//     });
//   },
// });
