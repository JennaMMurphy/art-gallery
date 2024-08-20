enum Field {
  Name = "name",
  Email = "email",
  Message = "message",
  Subject = "subject",
}

const PageContact: React.FC = () => {
  return (
    <div>
      <section className="contact__section">
        <label htmlFor={Field.Name}>Name</label>
        <input className="contact__input" id={Field.Name}></input>
      </section>
      <section className="contact__section">
        <label htmlFor={Field.Subject}>Subject</label>
        <input className="contact__input" id={Field.Subject}></input>
      </section>

      <section className="contact__section">
        <label htmlFor={Field.Email}>Email</label>
        <input className="contact__input" id={Field.Email}></input>
      </section>

      <section className="contact__section">
        <label htmlFor={Field.Message}>Message</label>
        <textarea className="contact__input" id={Field.Message}></textarea>
      </section>

      <section>
        <button className="contact__button">
            Send
        </button>
      </section>
      rtsetr
    </div>
  );
};

export default PageContact;
