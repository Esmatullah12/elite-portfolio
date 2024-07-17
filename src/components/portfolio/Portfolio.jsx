import "./Portfolio.css";
import "swiper/css";
import MainTitle from "../UI/MainTitle";
import Card from "../UI/Card";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="portfolio container">
      <MainTitle
        className="main-title"
        text={"Creative "}
        spanText={"Portfolio"}
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
          <Card title={'Sweet Fruit'} category={'Vimeo'} imagePath={"/images/asset 12.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title={'Good Present'} category={'Youtube'} imagePath={"/images/asset 13.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title={'Mockuo Cream'} category={'Soundcloud'} imagePath={"/images/asset 14.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title={'Delicious Apple'} category={'Detail'} imagePath={"/images/asset 15.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title={'Blue Orange'} category={'Image'} imagePath={"/images/asset 16.jpeg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
