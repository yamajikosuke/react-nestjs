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
