"use client"

import { Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import { serviceData } from "../../data";

const SliderSkills = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[180px] md:h-[340px] w-full md:w-[550px] px-5 md:px-0">
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex px-3 py-6 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[#000]/40 transition-all duration-300 hover:border-secondary border-2">
              <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
              <div>
                <h3 className="mb-4 text-lg">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
 
export default SliderSkills;