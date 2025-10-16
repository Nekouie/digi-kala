"use client"

import Image from "next/image"
import sliderImage from "@/public/images/slider/lg-pic/slider-image";
import SmSlider from "@/public/images/slider/sm-pic/smPic";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderSetting = () => {


    const [onDiv, setOnDiv] = useState(false);

    const sliderRef = useRef(null);

    const prevSlider = () => {
        sliderRef.current.scrollBy({left: -100, behavior: "smooth"});
    }
    const nextSlider = () => {
        sliderRef.current.scrollBy({left: +100, behavior: "smooth"});
    }

    const handleMouseEnter = () => {
        setOnDiv(true);
    }
    const handleMouseLeave = () => {
        setOnDiv(false);
    }


    return (
        <>
            <div className="w-full  mb-10 hidden lg:flex items-start justify-center relative">
                <div ref={sliderRef}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     className={`lg:w-500 w-full  cursor-pointer  overflow-x-auto`}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}

                        className="mySwiper"
                    >

                        {sliderImage.map((image, i) => (
                            <SwiperSlide>
                                <Image
                                    className="w-full  object-cover px-0 min-h-80  rounded-none snap-start object-center  hidden "
                                    key={i} src={image} alt={i}/>
                            </SwiperSlide>


                        ))}

                    </Swiper>


                    <div className="w-full">
                        <div onClick={prevSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} lg:flex absolute hidden  transition-all delay-50 z-80 duration-200 right-31 bottom-10 p-2 bg-white rounded-full`}>
                            <NavigateBeforeIcon/>
                        </div>
                        <div onClick={nextSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} lg:flex absolute hidden transition-all delay-50 z-80 duration-200 right-20 bottom-10 p-2 bg-white rounded-full`}>
                            <NavigateNextIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSetting;