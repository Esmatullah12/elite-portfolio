import './Card.css'

const Card = (props) => {
  return(
    <div className='card-container'>
      <img src={props.imagePath} alt="" />
      <div className='card-info'>
        <p>{props.title}</p>
        <p>{props.category}</p>
      </div>
    </div>
  )
}

export default Card