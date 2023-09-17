// import React, { useState } from "react";
// // import csvParser from "csv-parser";

// // type Props = {
// //   formName?: string;
// //   defaultLang?: string;
// //   title?: string;
// //   centerName?: string;
// //   phoneNumber?: string;
// //   phoneNumberInt?: string;
// //   International?: string;
// //   webPage?: string;
// //   address?: string;
// //   information?: string;
// // };

// // export const JsonGenerator: React.FC = () => {
//   // const [json] = useState<string>();

//   // const createJson = (data: Props[]): string | undefined => {
//   //   console.log(data);
//   //   let jsonHeader;
//   //   let jsonContent = "";
//   //   const jsonFooter = `]}]}`;
//   //   let json;
//   //   for (let i = 0; i < data.length; i++) {
//   //     jsonHeader =
//   //       `{` +
//   //       `"defaultLang": "${data[i].defaultLang}",` +
//   //       `"title": {` +
//   //       `"en":  "${data[i].title}"` +
//   //       `},` +
//   //       `"fields": [` +
//   //       `{` +
//   //       `"name": { "en": "${data[i].formName}"," },` +
//   //       `"type": "block",` +
//   //       `"fields": [`;

//   //     //TODO URLなどの条件判定
//   //     jsonContent =
//   //       jsonContent +
//   //       ` {` +
//   //       `  "name": { "en": "Center Name", },` +
//   //       `  "type": "text",` +
//   //       ` "value": {` +
//   //       `   "en": "${data[i].centerName}"` +
//   //       ` }` +
//   //       `}` +
//   //       ` {` +
//   //       `  "name": { "en": "Phone", },` +
//   //       `  "type": "text",` +
//   //       ` "value": {` +
//   //       `   "en": "${data[i].phoneNumber}"` +
//   //       ` }` +
//   //       `}` +
//   //       ` {` +
//   //       `  "name": { "en": "Web page", },` +
//   //       `  "type": "text",` +
//   //       ` "value": {` +
//   //       `   "en": "${data[i].webPage}"` +
//   //       ` }` +
//   //       `}` +
//   //       ` {` +
//   //       `  "name": { "en": "Address", },` +
//   //       `  "type": "text",` +
//   //       ` "value": {` +
//   //       `   "en": "${data[i].address}"` +
//   //       ` }` +
//   //       `}` +
//   //       ` {` +
//   //       `  "name": { "en": "Information", },` +
//   //       `  "type": "text",` +
//   //       ` "value": {` +
//   //       `   "en": "${data[i].information}"` +
//   //       ` }` +
//   //       `}`;

//   //     json = jsonHeader + jsonContent + jsonFooter;
//   //   }
//   //   return json;
//   // };

//   const readFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     if (e.target.files !== null) {
//       const file = e.target.files[0];
//       const fileReader = new FileReader();
//       fileReader.readAsText(file);
//       fileReader.onload = (): void => {
//         //        const csvData = String(fileReader.result);
//         // const stream = csvParser();
//         // stream.write(fileReader.result);
//         // stream.on("data", (data) => {
//         //   const object = data; // objectにパースされた値が取得できます。
//         //   console.log(object);
//         // });
//       };
//     }
//   };

//   const postJson = (): void => {
//     console.log("postJson");
//   };

//   return (
//     <section className="section">
//       <div className="container">
//         <div className="columns">
//           <div className="column">
//             <h1>CSV読み込み</h1>
//             <div className="field">
//               <p className="control">
//                 <input
//                   className="input"
//                   type="file"
//                   id="file"
//                   onChange={(e): void => readFile(e)}
//                 />
//               </p>
//             </div>
//             {/* <div className="field">
//               <p className="control">
//                 <button
//                   className="button is-dark"
//                   onClick={(): void => readFile()}
//                 >
//                   読み込み
//                 </button>
//               </p>
//             </div> */}
//             <div className="field">
//               <p className="control">
//                 <button
//                   className="button is-dark"
//                   onClick={(): void => postJson()}
//                 >
//                   登録
//                 </button>
//               </p>
//             </div>
//           </div>

//           <div className="column">
//             <h1>JSON</h1>
//             <JsonView data={json} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const JsonView: React.FC<{ data?: string }> = ({ data }) => {
//   return (
//     <textarea
//       className="textarea"
//       cols={20}
//       rows={6}
//       defaultValue={data}
//     ></textarea>
//   );
// };

// // const TableCell = styled.div`
// //   display: table-cell;
// //   vertical-align: middle;
// // `;
// // const TableCellIcon = styled.div`
// //   display: table-cell;
// //   vertical-align: middle;
// //   width: 50px;
// //   padding: 5px;
// // `;

// // const TableRow = styled.div`
// //   display: table-row;
// // `;
