import { InputField } from "../utils/Constants";

export type FormErrorValue = string | null;
export interface FormError extends Record<InputField, FormErrorValue> {}

type FormInputType = "text" | "email" | "textArea";
export type FormInputProps = {
  name: InputField;
  performValidation: (input: HTMLInputElement | HTMLTextAreaElement) => void;
  error: string | null;
  type?: FormInputType;
};
