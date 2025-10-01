"use client"
import Stories from './stories';
import {useRef, useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Story = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);

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
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        scrollRef.current.scrollLeft = scrollX - dx

    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }


    return (
        <>
            <div className="w-full h-fit  px-3 ">
                <div
                    className="bg-white  w-full h-[10rem] flex items-center justify-center relative">
                    <div onClick={scrollRight}
                         className="lg:flex hidden hover:text-gray-800 text-gray-500 cursor-pointer absolute right-5 z-1 bg-white p-2 rounded-full border border-gray-300 ">
                        <NavigateNextIcon/>
                    </div>
                    <div ref={scrollRef}
                         onMouseDown={handleMouseDown}
                         onMouseMove={handleMouseMove}
                         onMouseUp={handleMouseUp}
                         style={{cursor: (isDragging ? "grabbing" : "grab")}}
                         className="w-full flex mx-5 list-container  overflow-y-hidden   overflow-x-auto items-center justify-start relative -z-0 ">
                        <Stories/>
                    </div>
                    <div onClick={scrollLeft}
                         className="lg:flex text-gray-500 hover:text-gray-800 hidden absolute left-5 bg-white p-2 rounded-full border border-gray-300 ">
                        <NavigateBeforeIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story