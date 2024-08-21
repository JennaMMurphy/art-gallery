import { useState } from "react";

enum Field {
  Name = "name",
  Email = "email",
  Message = "message",
  Subject = "subject",
}

type FormErrorValue = string | null;

interface FormError extends Record<Field, FormErrorValue> {}

const PageContact: React.FC = () => {
  const [errors, setErrors] = useState<FormError>({
    [Field.Name]: null,
    [Field.Email]: null,
    [Field.Message]: null,
    [Field.Subject]: null,
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
      <section className="contact__section">
        <label htmlFor={Field.Name}>Name</label>
        <input
          className="contact__input"
          id={Field.Name}
          name={Field.Name}
          type="text"
          onBlur={performValidation}
        ></input>
        {errors[Field.Name] && <p>{errors[Field.Name]}</p>}
      </section>
      <section className="contact__section">
        <label htmlFor={Field.Subject}>Subject</label>
        <input
          className="contact__input"
          id={Field.Subject}
          name={Field.Subject}
          type="text"
          required
          onBlur={performValidation}
        ></input>
        {errors[Field.Subject] && <p>{errors[Field.Subject]}</p>}
      </section>

      <section className="contact__section">
        <label htmlFor={Field.Email}>Email</label>
        <input
          className="contact__input"
          id={Field.Email}
          name={Field.Email}
          type="email"
          required
          onBlur={performValidation}
        ></input>
        {errors[Field.Email] && <p>{errors[Field.Email]}</p>}
      </section>

      <section className="contact__section">
        <label htmlFor={Field.Message}>Message</label>
        <input
          className="contact__input"
          id={Field.Message}
          name={Field.Message}
          required
          onBlur={performValidation}
        ></input>
      </section>

      <section>
        <button className="contact__button" type="submit">
          Send
        </button>
      </section>
    </form>
  );
};

export default PageContact;
