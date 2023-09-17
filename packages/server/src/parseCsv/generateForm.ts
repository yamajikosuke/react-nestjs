import * as csvParse from 'csv-parse/lib/sync';
import { readFileSync } from 'fs';
import { post } from 'request';

import { FormProps, TextFieldProps, FieldProps } from './formProps';

const filePath = './data/form_test.csv';
const host = process.argv[2];
// console.log('host:', host);
const data = readFileSync(filePath);
const csvForms = csvParse(data, {
  columns: true,
  skip_empty_lines: true,
});
const forms: Record<string, FormProps> = {};
console.log(csvForms);

// const csvForms = [
//   {
//     formName: "FAC_7",
//     defaultLang: "en",
//     language: "en",
//     contactTitle: "Contact Us",
//     name: "FANUC America",
//     countryOrRegionTitle: "Country or Region",
//     countryOrRegion: "U.S.A",
//     phoneTitle: "Phone",
//     phone: "8883268287",
//     displayPhone: "888-326-8287",
//     globalPhone: "+18883268287",
//     displayGlobalPhone: "+1-888-326-8287",
//     international: "International",
//     webpageTitle: "Web page",
//     displayWebpage: "https://www.fanucamerica.com",
//     webpageUrl: "https://www.fanucamerica.com",
//     addressTitle: "Address",
//     address: "3900 West Hamlin Rd.Rochester Hills, Michigan 48309-3253",
//     informationTitle: "Information",
//     information: "Telephone inquries are welcome at +1-888-326-8287",
//   },
//   {
//     formName: "FAC_11",
//     defaultLang: "en",
//     language: "en",
//     contactTitle: "Contact Us",
//     name: "METHODS",
//     countryOrRegionTitle: "Country or Region",
//     countryOrRegion: "U.S.A",
//     phoneTitle: "Phone",
//     phone: "9782741000",
//     displayPhone: "978-274-1000",
//     globalPhone: "+19782741000",
//     displayGlobalPhone: "+1-978-274-1000",
//     international: "International",
//     webpageTitle: "Web page",
//     displayWebpage: "https://www.methodsmachine.com",
//     webpageUrl: "https://www.methodsmachine.com",
//     addressTitle: "Address",
//     address: "64 UNION AVE, SUDBURY, MA  01776",
//     informationTitle: "Information",
//     information: "",
//   },
// ];

const CheckProperty = (formName: string, templateForm: FormProps): void => {
  if (
    Object.keys(templateForm.title).filter(key => key === 'en').length === 0
  ) {
    console.log('formName_title:', formName);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const block: any = templateForm.fields[0];

  if (
    Object.keys(block.fields[0].name).filter(key => key === 'en').length === 0
  ) {
    console.log('国.name', formName);
  }

  if (
    Object.keys(block.fields[0].value).filter(key => key === 'en').length === 0
  ) {
    console.log('国.value', formName);
  }

  if (
    Object.keys(block.fields[1].name).filter(key => key === 'en').length === 0
  ) {
    console.log('電話.name', formName);
  }

  if (
    Object.keys(block.fields[1].value).filter(key => key === 'en').length === 0
  ) {
    console.log('電話.value', formName);
  }

  if (block.fields[2]) {
    if (
      Object.keys(block.fields[2].name).filter(key => key === 'en').length === 0
    ) {
      console.log('WEB.name', formName);
    }

    if (
      Object.keys(block.fields[2].value).filter(key => key === 'en').length ===
      0
    ) {
      console.log('WEB.value', formName);
    }
  }
  if (block.fields[3]) {
    if (
      Object.keys(block.fields[3].name).filter(key => key === 'en').length === 0
    ) {
      console.log('住所.name', formName);
    }

    if (
      Object.keys(block.fields[3].value).filter(key => key === 'en').length ===
      0
    ) {
      console.log('住所.value', formName);
    }
  }
  if (block.fields[4]) {
    if (
      Object.keys(block.fields[4].name).filter(key => key === 'en').length === 0
    ) {
      console.log('情報.name', formName);
    }

    if (
      Object.keys(block.fields[4].value).filter(key => key === 'en').length ===
      0
    ) {
      console.log('情報.value', formName);
    }
  }
};

const getTemplateForm = (): FormProps => {
  const templateForm: FormProps = {
    defaultLang: '',
    title: '',
    localizedTitle: {},
    fields: [
      {
        name: '',
        type: 'block',
        fields: [
          {
            name: '',
            localizedName: {},
            type: 'text',
            value: '',
            localizedValue: {},
            fullName: '',
          },
        ],
      },
    ],
  };
  return templateForm;
};

const generateForm = (): void => {
  const buffer: string[] = [];
  let formNames: string[] = [];

  for (const item of csvForms) {
    buffer.push(item.formName);
  }
  formNames = Array.from(new Set(buffer));

  for (const formName of formNames) {
    const templateForm = getTemplateForm();
    let centerName;
    const countryOrRegion: TextFieldProps = {
      type: 'text',
      name: '',
      fullName: '連絡先.国（地域）',
      value: '',
    };

    const phone: TextFieldProps = {
      name: '',
      type: 'text',
      value: '',
      fullName: '連絡先.電話',
      format: 'markdown',
    };

    const web: TextFieldProps = {
      name: '',
      type: 'text',
      value: '',
      fullName: '連絡先.Web',
      format: 'markdown',
    };

    const address: TextFieldProps = {
      type: 'text',
      name: '',
      fullName: '連絡先.住所',
      value: '',
    };

    const information: TextFieldProps = {
      type: 'text',
      name: '',
      fullName: '連絡先.情報',
      value: '',
    };

    for (const csvForm of csvForms) {
      if (formName === csvForm.formName) {
        const fieldItems: FieldProps[] = [];
        templateForm.defaultLang = csvForm.defaultLang;
        templateForm.title = csvForm.contactTitle;

        // 国・地域
        centerName = csvForm.name;
        if (csvForm.countryOrRegionTitle && csvForm.countryOrRegion) {
          // 連絡先.国（地域）name
          countryOrRegion.name = csvForm.countryOrRegionTitle;
          // 連絡先.国（地域）value
          countryOrRegion.value = csvForm.countryOrRegion;
          fieldItems.push(countryOrRegion);
        }
        if (csvForm.phoneTitle && csvForm.phone) {
          // 連絡先.電話name
          phone.name = csvForm.phoneTitle;
          // 連絡先.電話value
          phone.value = `[${csvForm.displayPhone}](tel:${csvForm.phone})  \n[${csvForm.displayGlobalPhone}](tel:${csvForm.globalPhone})(${csvForm.international})`;
          fieldItems.push(phone);
        }
        if (csvForm.webpageTitle && csvForm.webpageUrl) {
          // 連絡先.WEB name
          web.name = csvForm.webpageTitle;
          // 連絡先.WEB value
          web.value = `[${csvForm.displayWebpage}](${csvForm.webpageUrl}) `;
          fieldItems.push(web);
        }
        if (csvForm.addressTitle && csvForm.address) {
          // 連絡先.住所 name
          address.name = csvForm.addressTitle;
          // 連絡先.住所 value
          address.value = csvForm.address;
          fieldItems.push(address);
        }
        if (csvForm.informationTitle && csvForm.information) {
          // 連絡先.情報 name
          information.name = csvForm.informationTitle;
          // 連絡先.情報 value
          information.value = csvForm.information;
          fieldItems.push(information);
        }
        templateForm.fields = [
          {
            name: centerName,
            type: 'block',
            fields: fieldItems,
          },
        ];
      }
    }
    // console.log(templateForm);
    forms[formName] = templateForm;
    // CheckProperty(formName, templateForm);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const doRequest = (options: any): Promise<unknown> => {
  return new Promise(function(resolve, reject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    post(options, function(error: any, res: any, body: any) {
      if (!error && res.statusCode == 201) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};

const postForms = async (): Promise<void> => {
  try {
    for (const [key, value] of Object.entries(forms)) {
      console.log('フォーム取り込み中...', key);
      const options = {
        uri: `${host}/api/v1/forms`,
        headers: {
          'Content-type': 'application/json',
        },
        json: {
          key: key,
          value: value,
        },
      };
      await doRequest(options);
    }
  } catch (e) {
    new Error(e);
  }
};

generateForm();

// postForms();
// console.log(forms);
