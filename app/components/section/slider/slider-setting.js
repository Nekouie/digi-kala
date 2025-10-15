"use client"

import Image from "next/image"
import sliderImage from "@/public/images/slider/slider-image";
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
            <div className="w-fit  h-fit flex items-center justify-center relative">
                <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
                     onMouseMove={handleMouseMove} ref={sliderRef}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     className="lg:w-500 w-full mb-10 h-fit overflow-x-auto cursor-pointer list-container scroll-smooth flex flex-row justify-center  snap-x snap-mandatory">
                    {sliderImage.map((image, i) => (
                        <Image className="w-11/12 lg:w-full object-fill  lg:h-fit h-60 lg:rounded-none px-2 rounded-2xl  lg:object-center lg:snap-start snap-center" key={i} src={image} alt={i}/>
                    ))}

                    <div className="w-full">
                        <div onClick={prevSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} absolute transition-all delay-50 duration-200 right-85 bottom-20 p-2 bg-white rounded-full`}>
                            <NavigateBeforeIcon/>
                        </div>
                        <div onClick={nextSlider}
                             className={`${onDiv ? "opacity-100" : "opacity-0"} absolute transition-all delay-50 duration-200 right-73 bottom-20 p-2 bg-white rounded-full`}>
                            <NavigateNextIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSetting;