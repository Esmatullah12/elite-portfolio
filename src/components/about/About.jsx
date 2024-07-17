import './About.css'


const About = ({onLearnMoreClick}) => {
  return(
    <div className="about container">
      <div className="img-container">
        <img className='about-img' src='/images/my-image.JPG' alt="person in the img" />
      </div>
      <div className="right">
        <div className='about-title-container'>
          <h2 className='name'>ESMATULLAH <span className="">QADEEMI</span></h2>
          <h3 className='about-sub-title'>Creative Developer</h3>
        </div>
        <p className='about-desc'>
          Passionate Junior front-end Web Developer skilled in JavaScript, and Python, with expertise in React.js, node.js, and tailwind CSS. Committed to developing innovative and efficient programs.
        </p>
        <button className='btn' onClick={onLearnMoreClick}>Learn More</button>
      </div>
    </div>
  )
}

export default About