import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./Myslide.css";
import { on } from "events";
import styled from "styled-components";

const Slide = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2000 }}
      loop={true}
    >
      <SlideBanner className="slide">
        <a href="http://localhost:3000/lecture/8YIwaO6Cojw">
          <img src="banner_01.png" alt="slide banner" />
        </a>
        Slide 1
      </SlideBanner>
      <SwiperSlide className="slide">
        <a href="http://localhost:3000/lecture/NcI-WJSWdv8">
          <img src="banner_02.png" alt="slide banner" />
        </a>
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="slide">
        <a href="http://localhost:3000/lecture/2AMRTAFSh98">
          <img src="banner_03.png" alt="slide banner" />
        </a>
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="slide">Slide 4</SwiperSlide>
    </Swiper>
  );
};
export default Slide;

const SlideBanner = styled(SwiperSlide)``;