import './ProgressBar.css'

const ProgressBar = (props) => {
  return (
    <div className='complete-bar'>
      <div className='completed-bar' style={{width: props.comptPercentage}}></div>
    </div>
  )
}

export default ProgressBar