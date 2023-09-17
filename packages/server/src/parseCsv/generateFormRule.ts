export type FormProps = {
  defaultLang: string;
  title: string;
  localizedTitle?: Record<string, string>;
  fields: FieldProps[];
};

export type FieldProps =
  | BlockProps
  | RowProps
  | TextFieldProps
  | InputFieldProps
  | TextareaFieldProps
  | SelectFieldProps
  | InputArrayFieldProps
  | UploadFieldProps;

export type BlockProps = {
  type: 'block';
  name: string;
  localizedName?: Record<string, string>;
  fields: FieldProps[];
};

export type RowProps = {
  type: 'row';
  fields: FieldProps[];
};

export type TextFieldProps = {
  type: 'text';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  value: string;
  localizedValue?: Record<string, string>;
  format?: 'plain' | 'markdown';
};

export type InputFieldProps = {
  type: 'input';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  placeholder?: string;
  localizedPlaceholder?: Record<string, string>;
  validation?: ValidationProps;
};

export type TextareaFieldProps = {
  type: 'textarea';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  placeholder?: string;
  localizedPlaceholder?: Record<string, string>;
  validation?: ValidationProps;
};

export type SelectFieldProps = {
  type: 'select';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  options: string[];
  localizedOptions?: Record<string, string>[];
  validation?: ValidationProps;
};

export type InputArrayFieldProps = {
  type: 'input-array';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  placeholder?: string;
  localizedPlaceholder?: Record<string, string>;
  validation?: ValidationProps;
};

export type UploadFieldProps = {
  type: 'upload';
  name: string;
  localizedName?: Record<string, string>;
  fullName: string;
  validation?: ValidationProps;
};

export type ValidationProps = {
  type?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  pattern?: {
    name: string;
    localizedName?: Record<string, string>;
    value: string;
  };
};

const items = [
  { Key: 'FAC_7', CountryCode: 'US', ModelName: 'CNC', ModelId: '1' },
  { Key: 'FAC_7', CountryCode: 'US', ModelName: 'LASER', ModelId: '7' },
  { Key: 'FAC_7', CountryCode: 'US', ModelName: 'ROBOT', ModelId: '2' },
  {
    Key: 'FAC_7',
    CountryCode: 'US',
    ModelName: 'ROBODRILL',
    ModelId: '3',
  },
  {
    Key: 'FAC_11',
    CountryCode: 'US',
    ModelName: 'ROBODRILL',
    ModelId: '3',
  },
  {
    Key: 'FAC_12',
    CountryCode: 'US',
    ModelName: 'ROBOSHOT',
    ModelId: '5',
  },
  {
    Key: 'FAC_11',
    CountryCode: 'US',
    ModelName: 'ROBOCUT',
    ModelId: '4',
  },
  { Key: 'FAC_15', CountryCode: 'CA', ModelName: 'CNC', ModelId: '1' },
  {
    Key: 'FAC_15',
    CountryCode: 'CA',
    ModelName: 'LASER',
    ModelId: '7',
  },
  {
    Key: 'FAC_17',
    CountryCode: 'CA',
    ModelName: 'ROBOT',
    ModelId: '2',
  },
  {
    Key: 'FAC_15',
    CountryCode: 'CA',
    ModelName: 'ROBODRILL',
    ModelId: '3',
  },
  {
    Key: 'FAC_19',
    CountryCode: 'CA',
    ModelName: 'ROBODRILL',
    ModelId: '3',
  },
  {
    Key: 'FAC_15',
    CountryCode: 'CA',
    ModelName: 'ROBOCUT',
    ModelId: '4',
  },
  {
    Key: 'FAC_19',
    CountryCode: 'CA',
    ModelName: 'ROBOCUT',
    ModelId: '4',
  },
];

// const items = [
//   { Key: 'FSP_683', CountryCode: 'SG', ModelName: 'CNC', ModelId: '1' },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'SG',
//     ModelName: 'LASER',
//     ModelId: '7',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'SG',
//     ModelName: 'ROBOT',
//     ModelId: '2',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'SG',
//     ModelName: 'ROBODRILL',
//     ModelId: '3',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'SG',
//     ModelName: 'ROBOSHOT',
//     ModelId: '5',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'SG',
//     ModelName: 'ROBOCUT',
//     ModelId: '4',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'MM',
//     ModelName: 'ROBOT',
//     ModelId: '2',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'MM',
//     ModelName: 'ROBODRILL',
//     ModelId: '3',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'MM',
//     ModelName: 'ROBOSHOT',
//     ModelId: '5',
//   },
//   {
//     Key: 'FSP_683',
//     CountryCode: 'MM',
//     ModelName: 'ROBOCUT',
//     ModelId: '4',
//   },
// ];
//country code
const bufferCountryCodes: string[] = [];
const bufferFormNames: string[] = [];
let countryCodes: string[] = [];
let formNames: string[] = [];

for (const item of items) {
  bufferCountryCodes.push(item.CountryCode);
}
countryCodes = Array.from(new Set(bufferCountryCodes));

for (const item of items) {
  bufferFormNames.push(item.Key);
}
formNames = Array.from(new Set(bufferFormNames));

// console.log(formNames);
const modelNames = [
  'CNC',
  'LASER',
  'ROBOT',
  'ROBODRILL',
  'ROBOSHOT',
  'ROBOCUT',
];

type areaModelsProps = {
  area?: string;
  categories?: string[];
  name?: string;
  formType?: number;
  descripttion?: string;
  props?: FormProps;
};

//国コードとモデル名が重複するものを探す
let count;
const chouhukuDatas: { countryCode: string; modelName: string }[] = [];

for (const countryCode of countryCodes) {
  for (const modelName of modelNames) {
    count = 0;
    for (const item of items) {
      // console.log(countryCode, modelName, item);
      if (item.CountryCode === countryCode && item.ModelName === modelName) {
        count++;
        // console.log(count, countryCode, modelName);
      }
    }
    // console.log(count, countryCode, modelName);
    if (count >= 2) {
      chouhukuDatas.push({
        countryCode: countryCode,
        modelName: modelName,
      });
    }
  }
}

// console.log(chouhukuDatas);
// console.log('===============');
// const areaModels: areaModelsProps = [];
const buffer: {
  formName: string[];
  country: string;
  modelNames: string[];
}[] = [];
for (const formname of formNames) {
  let country;
  for (const countryCode of countryCodes) {
    const countryCategory: Record<string, string[]> = {};
    const categories: string[] = [];
    for (const modelName of modelNames) {
      for (const item of items) {
        if (
          countryCode === item.CountryCode &&
          modelName === item.ModelName &&
          formname === item.Key
        ) {
          // console.log(item.CountryCode, item.ModelName);
          const chouhuku = chouhukuDatas.filter(chouhukuData => {
            return (
              chouhukuData.countryCode === item.CountryCode &&
              chouhukuData.modelName === item.ModelName
            );
          });
          // console.log('===============');
          // console.log(chouhuku.length, chouhuku);
          if (chouhuku.length === 0) {
            // console.log(item.CountryCode, item.ModelName);
            categories.push(item.ModelName);
            // console.log(countryCode, categories);
            countryCategory[countryCode] = categories;
            country = item.CountryCode;
          }
        }
      }
    }
    if (country && countryCategory[countryCode]) {
      buffer.push({
        formName: [formname],
        country: country,
        modelNames: countryCategory[countryCode],
      });
    }
  }
  // console.log(formname, country, categories);
  // if (country) {
  //   buffer.push({
  //     formName: [formname],
  //     country: country,
  //     modelNames: categories,
  //   });
  // }
}
console.log('===== Result ==========');
// console.log(buffer);

//重複データ生成
console.log('===== 重複データ生成 ==========');
const bufferChouhuku: {
  formName: string[];
  country: string;
  modelNames: string[];
}[] = [];
console.log('重複データ');
console.log(chouhukuDatas);
for (const chouhuku of chouhukuDatas) {
  const categories: string[] = [];
  for (const countryCode of countryCodes) {
    for (const modelName of modelNames) {
      for (const item of items) {
        if (countryCode === item.CountryCode && modelName === item.ModelName) {
          if (
            chouhuku.countryCode === item.CountryCode &&
            chouhuku.modelName === item.ModelName
          ) {
            // console.log(item.Key, item.CountryCode, item.ModelName);
            categories.push(item.Key);
            // country = item.CountryCode;
          }
        }
      }
    }
  }
  bufferChouhuku.push({
    formName: categories,
    country: chouhuku.countryCode,
    modelNames: [chouhuku.modelName],
  });
}
// console.log('=====');
console.log(bufferChouhuku);

//フォームデータの配列結合
const bufferFormData = buffer.concat(bufferChouhuku);
console.log('=====');
console.log(bufferFormData);
