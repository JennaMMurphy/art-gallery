
import type { FormInputProps } from "../../../types/Contact";

const ContactInput: React.FC<FormInputProps>= ({name, performValidation, error, type = "text"}) => {
    return (
        <section className="contact__section">
        <label className="text--capitalize" htmlFor={name}>{name}</label>
        <input
          className="contact__input"
          id={name}
          name={name}
          required
          type={type}
          onBlur={performValidation}
        ></input>
        {error&& <p>{error}</p>}
      </section>
    );
  };
  export default ContactInput;
  