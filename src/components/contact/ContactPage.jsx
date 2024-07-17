import "./ContactPage.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import MainTitle from "../UI/MainTitle";

const ContactPage = () => {
  return (
    <div className="contact">
      <MainTitle text={'Get in '} spanText={'Touch'} />
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
