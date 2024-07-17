import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form" action="">
      <input type="text" name="" id="" placeholder="Name" />
      <input type="email" placeholder="email" />
      <textarea name="" id="" placeholder="Message"></textarea>
      <button className="btn send-message-btn " type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
