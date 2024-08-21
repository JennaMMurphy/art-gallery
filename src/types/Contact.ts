import { InputField } from "../utils/constants";

export type FormErrorValue = string | null;
export interface FormError extends Record<InputField, FormErrorValue> {}

export interface FormInputProps {
    name: InputField
    performValidation:( event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | null
    type?: string;
}
