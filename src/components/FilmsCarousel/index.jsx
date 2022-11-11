import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../layout/Container";
import items from "./items";

import classes from './FilsCarousel.module.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FilsCarousel = () => {
  return (
    <section className={classes['slider']}>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={80}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className={classes['slider__inner']}>
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <img className={classes['slider__image']} src={item.img} alt={item.name} />
                <h6 className={classes['slider__name']}>{item.name}</h6>
                <p className={classes['slider__text']}>{item.text}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default FilsCarousel;
