import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './Myslide.css';

const Slide = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        observer={true}
        observeParents={true}
        resistance={false}
        autoHeight={true}
      >
        <SlideBanner>
          <Link to='lecture/8YIwaO6Cojw/내가 자바스크립트를 쓰지 않는 이유?'>
            <img src='banner_01.png' alt='slide banner1' />
          </Link>
          <div>Slide1</div>
        </SlideBanner>
        <SlideBanner>
          <Link to='lecture/NcI-WJSWdv8/리액트 시작 전 자바스크립트 문법 싹! 정리!'>
            <img src='banner_02.png' alt='slide banner2' />
          </Link>
          <div>Slide2</div>
        </SlideBanner>
        <SlideBanner>
          <Link to='lecture/2AMRTAFSh98/자바스크립트, 프로답게 개발하기!'>
            <img src='banner_03.png' alt='slide banner3' />
          </Link>
          <div>Slide3</div>
        </SlideBanner>
        <SlideBanner>
          <Link to='lecture/xkpcNolC270/타입스크립트 쓰는 이유, 필수 문법 10분 정리!'>
            <img src='banner_04.png' alt='slide banner4' />
          </Link>
          <div>Slide4</div>
        </SlideBanner>
        <SlideBanner>
          <Link to='lecture/4_WLS9Lj6n4/140분 만에 끝내는 자바스크립트'>
            <img src='banner_05.png' alt='slide banner5' />
          </Link>
          <div>Slide5</div>
        </SlideBanner>
      </Swiper>
    </>
  );
};
export default Slide;

const SlideBanner = styled(SwiperSlide)`
  width: 100%;
  img {
    width: 100%;
    /* height: 280px; */
  }
  div {
    display: none;
  }
`;
