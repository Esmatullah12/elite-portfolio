import './News.css';
import MainTitle from '../UI/MainTitle';
import NewsCard from '../UI/NewsCard';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const News = () => {
  return (
    <div className='container news-container'>
       <MainTitle
        className="main-title"
        text={"Latest "}
        spanText={"News"}
      />

      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <NewsCard imagePath={'/images/newsImages/asset 21.jpeg'} newsTitle={'Building brands through customer service'} category={'Branding'}/>
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard imagePath={'/images/newsImages/asset 22.jpeg'} newsTitle={'Unstoppable Jamstack and Gatsby opportunity'} category={'Design'}/>
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard imagePath={'/images/newsImages/asset 23.jpeg'} newsTitle={'Electron framework adds encryption API'} category={'Media'}/>
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard imagePath={'/images/newsImages/asset 24.jpeg'} newsTitle={'Sentry for JavaScript monitors release health'} category={'Technology'}/>
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard imagePath={'/images/newsImages/asset 25.jpeg'} newsTitle={'Five reasons to begin a Packt subscription'} category={'Lifestyle'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default News;
