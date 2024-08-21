import { useState } from "react";
import { InputField } from "../../../utils/constants";
import ContactInput from "./Input";

import type { FormError, FormErrorValue } from "../../../types/Contact";

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
    const formData = new FormData(form);
    //fetch('/some-api', { method: form.method, body: formData });

    console.log(Object.fromEntries(formData.entries()));
  };

  const performValidation: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { validationMessage } = event.target;
    setErrors((prevState) => ({
      ...prevState,
      [event.target.name]: validationMessage ?? null,
    }));
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
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
        type="email"
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
