import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import items from "./bannerItems";

import classes from "./Banner.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";

const Banner = () => {
  return (
    <section className={classes["slider"]}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        speed={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div className={classes["slider__inner"]}>
          {items.map(({ img }) => (
            <SwiperSlide>
              <img className={classes["slider__image"]} src={img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
