import './MainTitle.css'
const MainTitle = (props) => {
  return(
    <h3 className="main-title">
        {props.text}<span style={{color: 'var(--red)'}}>{props.spanText}</span>
    </h3>
  )
}

export default MainTitle