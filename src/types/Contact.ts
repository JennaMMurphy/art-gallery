import { InputField } from "../utils/Constants";

export type FormErrorValue = string | null;
export interface FormError extends Record<InputField, FormErrorValue> {}

type FormInputType = "text" | "email" | "textArea";
export type FormInputProps = {
  name: InputField;
  checkValid: (input: HTMLInputElement | HTMLTextAreaElement) => boolean;
  error: string | null;
  type?: FormInputType;
};
