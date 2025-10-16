import SmSliderPic from "@/public/images/slider/sm-pic/smPic";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import sliderImage from "@/public/images/slider/lg-pic/slider-image";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SmSlider = () => {
    return (
        <>
            <div className="w-full  mb-10 lg:hidden flex items-start justify-center relative">
                <div
                    className={`lg:w-500 w-full  cursor-pointer list-container overflow-x-auto flex items-center justify-start snap-x snap-mandatory `}>

                    {SmSliderPic.map((SmImage, index) => (

                        <Image
                            className="h-70 min-w-11/12 px-2 rounded-2xl snap-center"
                            key={index} src={SmImage} alt={index}/>

                    ))}

                </div>
            </div>


        </>
    )
};

export default SmSlider;