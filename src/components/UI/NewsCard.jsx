import './NewsCard.css'

const NewsCard = (props) => {
  return (
    <div className='news-card'>
      <img src={props.imagePath} alt="" />
      <p className='news-title'>{props.newsTitle}</p>
      <p className='news-category'>{props.category}</p>
    </div>
  )
}

export default NewsCard