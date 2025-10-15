"use client"
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {useRef, useState} from "react";
import amazing from "../../../public/images/suggestionImages/Amazing.svg"
import amazings from "../../../public/images/suggestionImages/Amazings.svg"
import Image from "next/image"

const SuperSuggest = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [newScrollX, setNewScrollX] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [scrollCurrent, setScrollCurrent] = useState(0);

    const scrollRight = () => {
        scrollRef.current.scrollBy({left: 100, behavior: "smooth"});
        setNewScrollX(scrollRef.current.scrollLeft + 100);
        setScrollCurrent(scrollRef.current.clientWidth - scrollRef.current.scrollLeft + 100);

    }
    const scrollLeft = () => {
        scrollRef.current.scrollBy({left: -100, behavior: "smooth"});
        setNewScrollX(scrollRef.current.scrollLeft - 100);
        setScrollCurrent(scrollRef.current.clientWidth - scrollRef.current.scrollLeft + 100);
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
        setNewScrollX(scrollRef.current.scrollLeft);
        setScrollWidth(scrollRef.current.scrollWidth);
        setScrollCurrent(scrollRef.current.clientWidth - scrollRef.current.scrollLeft + 50);
        console.log(scrollCurrent)
        console.log(scrollWidth)
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    return (
        <>
            <div className="w-full h-[18rem] hidden lg:flex items-center justify-start mt-3 ">
                <div
                    className="w-full h-full relative bg-rose-600 rounded-2xl py-5 flex justify-start items-center">

                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        style={{cursor: (isDragging ? "grabbing" : "grab")}}
                        className={" flex lg:flex-row flex-col items-center justify-start" +
                            " snap-x" +
                            " h-full w-full" +
                            " overflow-x-auto overflow-y-hidden list-container"}>
                        <div onClick={scrollRight}
                             className={`bg-white ${newScrollX < -10 ? "absolute" : "hidden"} p-2 border absolute right-1 border-gray-300 rounded-full text-gray-500 hover:cursor-pointer hover:text-gray-800`}>
                            <NavigateNextIcon/>
                        </div>

                        <div
                            className="h-full px-10 lg:flex flex-col items-center justify-between me-2 ">
                            <Image className="scale-110" src={amazings} alt="amazings"/>
                            <p className="text-white w-11/12 text-center text-2xl flex justify-between items-center">
                                <span
                                    className="bg-white text-black rounded-sm p-0.5 text-[1rem]">10</span> :
                                <span
                                    className="bg-white text-black rounded-sm p-0.5 text-[1rem]">10</span> :
                                <span
                                    className="bg-white text-black rounded-sm p-0.5 text-[1rem]">10
                                 </span></p>
                            <Image src={amazing} alt="amazing"/>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-white w-full text-xs text-center text-nowrap font-bold"> مشاهده
                                    همه </p>
                                <NavigateBeforeIcon sx={{width: "1rem", color: "white"}}/>
                            </div>
                        </div>

                        <div className="w-full h-full flex flex-row items-start justify-start">
                            <div
                                className="bg-white rounded-xs h-full min-w-40  sm:-ms-6 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-1 "></div>
                            <div className="bg-white rounded-xs h-full min-w-40 me-2"></div>
                        </div>
                    </div>

                    <div onClick={scrollLeft}
                         className={`bg-white border ${(scrollCurrent > scrollWidth? "hidden" : "absolute")} left-2 select-none border-gray-300 rounded-full text-gray-500 p-2 hover:cursor-pointer hover:text-gray-800`}>
                        <NavigateBeforeIcon/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuperSuggest;