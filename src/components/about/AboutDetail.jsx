import './AboutDetail.css';
import AboutDetailRight from './AboutDetailRight';
import AboutDetailLeft from './AboutDetailLeft';
import { IoClose } from "react-icons/io5";

const AboutDetail = ({ onCloseClick }) => {
  return (
    <div className='about-detail'>
      <AboutDetailRight />
      <AboutDetailLeft />
      <button className='close-btn' onClick={onCloseClick}><IoClose /></button>
    </div>
  );
};

export default AboutDetail;