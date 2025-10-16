"use client"

import Image from "next/image"
import sliderImage from "@/public/images/slider/lg-pic/slider-image";
import SmSlider from "@/public/images/slider/sm-pic/smPic";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useRef, useState} from "react";

const SliderSetting = () => {

    const [scrollX, setScrollX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
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

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollX((sliderRef.current.scrollLeft));

    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = (e.pageX - startX) * 6;
        sliderRef.current.scrollLeft = (scrollX - dx)
    }

    const handleMouseUp = () => {
        setIsDragging(false);
        sliderRef.current.classList.remove('no-snap');

    }


    return (
        <>
            <div className="w-full  mb-10   flex items-start justify-center relative">
                <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
                     onMouseMove={handleMouseMove} ref={sliderRef}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     className="lg:w-500 w-full  cursor-pointer list-container overflow-auto scroll-smooth flex flex-row justify-start  snap-x snap-mandatory">
                    {sliderImage.map((image, i) => (
                        <Image className="w-full  object-cover  px-0  rounded-none object-center snap-start hidden lg:block"  key={i} src={image} alt={i}/>
                    ))}
                    {SmSlider.map((SmImage, index) => (

                        <Image className="h-70 lg:hidden min-w-11/12 px-2 rounded-2xl snap-center"  key={index} src={SmImage} alt={index}/>
                    ))}

                    <div className="w-full">
                        <div onClick={prevSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} lg:absolute hidden transition-all delay-50 duration-200 right-31 bottom-10 p-2 bg-white rounded-full`}>
                            <NavigateBeforeIcon/>
                        </div>
                        <div onClick={nextSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} lg:absolute hidden transition-all delay-50 duration-200 right-20 bottom-10 p-2 bg-white rounded-full`}>
                            <NavigateNextIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSetting;