export interface Form {
  id: string;
  title?: string;
  subtitle?: string;
  label: string; // To identify it easier
  replyToEmail: string;
  redirectUrl?: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  name: string;
  label: string;
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