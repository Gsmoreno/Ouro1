import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import MPrata from '../../assets/imgs/MPrata.png';
import MVelha from '../../assets/imgs/MVelha.png';
import MVida from '../../assets/imgs/MVida.png'
import MEspecial from '../../assets/imgs/MEspecial.png'
import MOuro from '../../assets/imgs/MOuro.png'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={-62}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={MOuro} alt="" /></SwiperSlide>
                <SwiperSlide><img src={MEspecial} alt="" /></SwiperSlide>
                <SwiperSlide><img src={MVida} alt="" /></SwiperSlide>
                <SwiperSlide><img src={MVelha} alt="" /></SwiperSlide>
                <SwiperSlide><img src={MPrata} alt="" /></SwiperSlide>
            
            </Swiper>
        </>
    );
}
