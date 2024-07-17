import './AboutDetailRight.css'
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const AboutDetailRight = () => {
  return(
    <div className="detail-right">
        <img src="/images/my-image.JPG" alt="" />
        <h2>Esmatullah <span>Qadeemi</span></h2>
        <p>Creative Developer</p>
        <div className='personal-info'>
          <div className='info-box'>
            <FaUserAlt />
            Esmatullah Qadeemi
          </div>
          <div className='info-box'>
            <SlCalender />
            21.03.2000
          </div>
          <div className='info-box'>
            <MdLocationOn />
            Arzam Qemat, Kabul
          </div>
          <div className='info-box'>
            <FaPhoneFlip />
            +93 0782534173
          </div>
          <div className='info-box'>
            <IoMail />
            example@gmail.com
          </div>
        </div>
        <button className='btn'>Download CV</button>
      </div>
  )
}

export default AboutDetailRight