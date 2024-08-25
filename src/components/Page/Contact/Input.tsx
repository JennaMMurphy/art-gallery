import type { FormInputProps } from "../../../types/Contact";

const ContactInput: React.FC<FormInputProps> = ({
  name,
  checkValid,
  error,
  type = "text",
}) => {
  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const input = event.target;
    if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
      checkValid(input);
    }
  };

  return (
    <section className="contact__section">
      <label className="text--capitalize" htmlFor={name}>
        {name}
      </label>
      {type === "textArea" ? (
        <textarea
          className={`contact__input ${error && "has--error"}`}
          id={name}
          name={name}
          required
          onBlur={handleBlur}
        ></textarea>
      ) : (
        <input
          className={`contact__input ${error && "has--error"}`}
          id={name}
          name={name}
          required
          type={type}
          onBlur={handleBlur}
        ></input>
      )}

      {error && <p className="font--sm has--error">{error}</p>}
    </section>
  );
};
export default ContactInput;
