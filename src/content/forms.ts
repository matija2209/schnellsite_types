export interface Form {
  id: string;
  label: string; // To identify it easier
  replyToEmail: string;
  title: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  name: string;
  placeholder: string;
  type: FormFieldType;
  required?: boolean;
}

export enum FormFieldType {
  Text = "text",
  Email = "email",
  TextArea = "textarea",
  Checkbox = "checkbox",
  Radio = "radio",
  Select = "select",
} 