"use client"
import Stories from './stories';
import {useRef, useState} from "react";

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
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollX(scrollRef.current.scrollLeft);
}
const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isDragging) return;
    const dx = e.pageX - startX;
    scrollRef.current.scrollLeft = scrollX - dx;
}

const handleMouseUp = () => {
    setIsDragging(false);
}




    return (
        <>
            <div className="bg-white  w-full h-[10rem] flex items-center justify-center">
                <div onClick={scrollRight}
                    className="flex items-center select-none justify-center text-center cursor-pointer absolute right-33 z-1 bg-white py-1 px-3 rounded-full border border-gray-300 ">
                    <p  className="text-2xl font-light"> {"<"} </p>
                </div>
                <div ref={scrollRef}
                     onMouseDown={handleMouseDown}
                     onMouseMove={handleMouseMove}
                     onMouseUp={handleMouseUp}
                    style={{cursor:(isDragging? "grabbing": "grab")}}
                     className="scroll-smooth flex select-none  overflow-x-scroll items-center justify-center w-10/12 relative -z-0 snap-x snap-mandatory">

                    <Stories/>
                </div>
                <div onClick={scrollLeft}
                    className="flex select-none items-center justify-center text-center cursor-pointer absolute left-33 bg-white py-1 px-3 rounded-full border border-gray-300 ">
                    <p className="text-2xl font-light"> {">"} </p>
                </div>
            </div>
        </>
    )
}

export default Story