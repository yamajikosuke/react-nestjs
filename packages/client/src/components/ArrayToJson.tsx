import React from "react";

export const ArrayToJson: React.FC = () => {
  const items = [
    ["FAC_7", "en", "en", 'en:"Contact Us"'],
    ["FMS_31", "en", "es", 'es:"Contáctenos"'],
    ["FMS_31", "en", "en", 'en:"Contact Us"'],
    ["FAC_11", "en", "en", 'en:"Contact Us"'],
  ];

  const forms: string[] = [];
  let formNames: string[] = [];

  const getFormName = (): void => {
    for (const item of items) {
      forms.push(item[0]);
    }
    formNames = Array.from(new Set(forms));
  };
  getFormName();

  const langLoop = (form: string, index: number, prop: string): string => {
    let data = "";
    const countForm = items.filter((item) => {
      return item[0] === form;
    }).length;
    let conma = "";
    let langData = "";
    for (let i = 0; i < items.length; i++) {
      if (form === items[i][0]) {
        if (prop === "defaultLang") {
          data = `${prop}: ${items[i][index]}, `;
        } else {
          if (i === countForm - 1) {
            conma = "";
          } else {
            conma = ",";
          }
          langData = items[i][index] + conma + langData;
          console.log(langData);
          data = `${prop}: {${langData}},`;
        }
      }
    }
    return data;
  };

  let jsonHeader;
  // let jsonContent = "";
  const jsonFooter = `]}]}`;
  let json;
  for (const item of formNames) {
    const formName = `const ${item}_Form: FormProps = `;
    // console.log(item);
    jsonHeader =
      `{` +
      langLoop(item, 1, "defaultLang") +
      langLoop(item, 3, "title") +
      `"fields": [` +
      `{` +
      langLoop(item, 4, "name") +
      `"type": "block",` +
      `"fields": [`;

    //TODO URLなどの条件判定
    // jsonContent =
    //   ` {` +
    //   `  "name": {${item[5]}},` +
    //   `  "type": "text",` +
    //   ` "value": {${item[6]}}` +
    //   `}` +
    //   ` {` +
    //   `  "name": {${item[7]}},` +
    //   `  "type": "text",` +
    //   `  "value": {${item[8]}},` +
    //   `  "isMarkdown": true,` +
    //   `}` +
    //   ` {` +
    //   `  "name": {${item[9]}},` +
    //   `  "type": "text",` +
    //   `  "value": {${item[10]}}` +
    //   `  "isMarkdown": true,` +
    //   ` {` +
    //   `  "name": {${item[11]}},` +
    //   `  "type": "text",` +
    //   `  "value": {${item[12]}}` +
    //   `}` +
    //   ` {` +
    //   `  "name": {{${item[13]}},` +
    //   `  "type": "text",` +
    //   `  "value": {${item[14]}}` +
    //   ` }` +
    //   `}`;
    json = formName + jsonHeader + jsonFooter;
    //    setForm(form.concat(json));
    console.log(json);
    console.log("=============================");
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Array to json</h1>
      </div>
      <hr />
      <div>
        Google translate API key: AIzaSyBHAJAtw7e_lBCqQLzZn6WL67MCyD41s3w
      </div>
    </section>
  );
};
