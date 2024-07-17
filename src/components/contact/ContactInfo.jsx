import './ContactInfo.css';

import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";

const ContactInfo = () => {
  return(
    <div className="contact-info">
      <div className='info-container'>
        <MdLocationOn style={{color: '#eb4a4c', fontSize: 20}}/>
        <p>Arzan Qemat, Kabul, Afhganistan</p>
      </div>
      <div className='info-container'>
        <FaPhoneAlt style={{color: '#eb4a4c', fontSize: 20}}/>
        <p>+93 78234173</p>
      </div>
      <div className='info-container'>
        <MdEmail style={{color: '#eb4a4c', fontSize: 20}}/>
        <p>esmatqadeemi12@gmail.com</p>
      </div>
      <div className='info-container'>
        <ImFacebook2 style={{color: '#eb4a4c', fontSize: 20}}/>
        <p>@FacebookNick</p>
      </div>
    </div>
  )
}

export default ContactInfo