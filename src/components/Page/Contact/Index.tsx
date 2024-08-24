import { useState } from "react";
import { InputField } from "../../../utils/Constants";
import ContactInput from "./Input";

import type { FormError } from "../../../types/Contact";

const PageContact: React.FC = () => {
  const [errors, setErrors] = useState<FormError>({
    [InputField.Name]: null,
    [InputField.Email]: null,
    [InputField.Message]: null,
    [InputField.Subject]: null,
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    Array.from(form.elements).forEach((input) => {
      if (input instanceof HTMLInputElement) {
        performValidation(input);
      }
    });

    if (Object.values(errors).some((error) => !!error)) {
      return;
    }

    const formData = new FormData(form);
    //TODO
    //fetch('/some-api', { method: form.method, body: formData });

    console.log(Object.fromEntries(formData.entries()));
  };

  const performValidation = (input: HTMLInputElement | HTMLTextAreaElement) => {
    const { validationMessage } = input;
    setErrors((prevState) => ({
      ...prevState,
      [input.name]: validationMessage ?? null,
    }));
  };

  return (
    <form noValidate method="post" onSubmit={handleSubmit}>
      <ContactInput
        name={InputField.Name}
        performValidation={performValidation}
        error={errors[InputField.Name]}
      />
      <ContactInput
        name={InputField.Subject}
        performValidation={performValidation}
        error={errors[InputField.Subject]}
      />
      <ContactInput
        name={InputField.Email}
        performValidation={performValidation}
        type="email"
        error={errors[InputField.Email]}
      />
      <ContactInput
        name={InputField.Message}
        performValidation={performValidation}
        type="textArea"
        error={errors[InputField.Message]}
      />

      <section>
        <button className="contact__button" type="submit">
          Send
        </button>
      </section>
    </form>
  );
};

export default PageContact;
