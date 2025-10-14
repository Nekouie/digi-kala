"use client"
import Stories from './story/stories';
import {useRef, useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Story = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [scrollLeftCount, setScrollLeftCount] = useState(0)
    const [width, setWidth] = useState(0);

    const scrollRight = () => {
        scrollRef.current.scrollBy({left: 150, behavior: "smooth"});
    }
    const scrollLeft = () => {
        scrollRef.current.scrollBy({left: -150, behavior: "smooth"});
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollX(scrollRef.current.scrollLeft);
        scrollRef.current.classList.add('no-snap');
        scrollRef.current.style.scrollBehavior = "auto";


    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        scrollRef.current.scrollLeft = scrollX - dx
        setScrollLeftCount(scrollRef.current.clientWidth - scrollRef.current.scrollLeft + 20);
        setWidth(scrollRef.current.scrollWidth);
        console.log(width);
        console.log(scrollLeftCount);
    }

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollRef.current.classList.remove('no-snap');
        scrollRef.current.style.scrollBehavior = "smooth";
    }


    return (
        <>
            <div
                className="bg-white  lg:px-3   w-full h-[10rem] flex items-center justify-center relative">

                <div onClick={scrollRight}
                     className={`lg:flex hidden ${scrollLeftCount === 0 ? "opacity-0" : "opacity-100"} hover:text-gray-800 transition-all duration-500 delay-50 text-gray-500 cursor-pointer absolute right-13 z-1 bg-white p-2 rounded-full border border-gray-300 `}>
                    <NavigateNextIcon/>
                </div>
                <div ref={scrollRef}
                     onMouseDown={handleMouseDown}
                     onMouseMove={handleMouseMove}
                     onMouseUp={handleMouseUp}
                     className="w-full flex mx-5 list-container  overflow-y-hidden overflow-x-auto items-center justify-start relative -z-0 ">
                    <Stories/>
                </div>
                <div onClick={scrollLeft}
                     className={`lg:flex ${scrollLeftCount < width? "opacity-0" : "opacity-100"} transition-all duration-500 delay-50  text-gray-500 hover:text-gray-800 hidden absolute left-13 bg-white p-2 rounded-full border border-gray-300 `}>
                    <NavigateBeforeIcon/>
                </div>
            </div>
        </>
    )
}

export default Story