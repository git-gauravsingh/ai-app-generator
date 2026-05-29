export interface FormField {
  label: string;
  type: string;
  placeholder?: string;
}

export interface FormConfig {
  title: string;
  fields?: FormField[];
}