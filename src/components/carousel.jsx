// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <div className="">
        <SwiperSlide className="">
          <div className="max-w-screen-xl ">
            <img
              className=" h-72 max-w-full rounded-lg"
              src="/illustrationsteelpan.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="block object-fill rounded-md w-max"
            src="/illustrationsteelpan.png"
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
