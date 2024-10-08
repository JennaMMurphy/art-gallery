import { useState } from "react";
import { HttpMethod, InputField } from "../../../utils/Constants";
import _fetch from "../../../utils/Fetch";
import ContactInput from "./Input";
import SubmitSuccess from "./SubmitSuccess";
import { ToastContainer } from "react-toastify";

import type { FormError } from "../../../types/Contact";

const PageContact: React.FC = () => {
  const [errors, setErrors] = useState<FormError>({
    [InputField.Name]: null,
    [InputField.Email]: null,
    [InputField.Message]: null,
    [InputField.Subject]: null,
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    let isValid = true;

    Array.from(form.elements).forEach((input) => {
      if (
        input instanceof HTMLInputElement ||
        input instanceof HTMLTextAreaElement
      ) {
        const isInputValid = checkValid(input);
        if (!isInputValid) {
          isValid = false;
        }
      }
    });
    if (!isValid) {
      return;
    }
    setLoading(true)
    const formData = new FormData(form);
    const { success, notify } = await _fetch("api/v1/contact", {
      method: HttpMethod.Post,
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });
    notify();
    setLoading(false)
    if (success) {
      form.reset();
      setHasSubmitted(true);
    }
  };

  const checkValid = (
    input: HTMLInputElement | HTMLTextAreaElement
  ): boolean => {
    const { validationMessage } = input;
    setErrors((prevState) => ({
      ...prevState,
      [input.name]: validationMessage ?? null,
    }));
    return !validationMessage;
  };

  if(hasSubmitted){
    return (        <SubmitSuccess />
    )
  } else if(loading){
    return (
      <div className="loading-animation"></div> 
    )
  } else {
    return ( <form noValidate method="post" onSubmit={handleSubmit}>
    <ContactInput
      name={InputField.Name}
      checkValid={checkValid}
      error={errors[InputField.Name]}
    />
    <ContactInput
      name={InputField.Subject}
      checkValid={checkValid}
      error={errors[InputField.Subject]}
    />
    <ContactInput
      name={InputField.Email}
      checkValid={checkValid}
      type="email"
      error={errors[InputField.Email]}
    />
    <ContactInput
      name={InputField.Message}
      checkValid={checkValid}
      type="textArea"
      error={errors[InputField.Message]}
    />
    <ToastContainer />
    <section>
      <button className="contact__button" type="submit">
        Send
      </button>
    </section>
  </form>)
  }

};

export default PageContact;
