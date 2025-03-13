export interface Form {
    id: string;
    title?: string;
    subtitle?: string;
    label: string;
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
export declare enum FormFieldType {
    Text = "text",
    Email = "email",
    TextArea = "textarea",
    Checkbox = "checkbox",
    Radio = "radio",
    Select = "select"
}
//# sourceMappingURL=forms.d.ts.map