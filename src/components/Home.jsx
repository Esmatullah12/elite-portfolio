import './Home.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  return(
    <div className='hero' >
      <h1 className='hero-heading'>ESMATULLAH <span className='title-span'>QADEEMI</span></h1>
      <p className='sub-title'><span className='sub-title-span'>Creative</span> Developer</p>
      <Link className='btn' to='/contact'>Get in Touch</Link>
    </div>
    
  )
}

export default Hero;