"use client"
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {useRef, useState} from "react";

const SuperSuggest = () => {

    const scrollRef2 = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    const scrollRight = () => {
        scrollRef2.current.scrollBy({left: 100, behavior: "smooth"});
    }
    const scrollLeft = () => {
        scrollRef2.current.scrollBy({left: -100, behavior: "smooth"});
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollX(scrollRef2.current.scrollLeft);
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        scrollRef2.current.scrollLeft = scrollX - dx
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    return (
        <>
            <div className="w-full h-[20rem] hidden lg:flex items-center justify-start mt-3 ">
                <div
                    className="w-full h-full relative bg-red-600 rounded-2xl py-5 flex justify-start items-center">

                    <div
                        ref={scrollRef2}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        style={{cursor:(isDragging ?"grabbing":"grab")}}
                         className={" flex lg:flex-row flex-col items-center justify-start" +
                        " snap-x" +
                        " h-full w-full" +
                        " overflow-x-auto overflow-y-hidden list-container"}>
                        <div onClick={scrollRight}
                             className="bg-white border lg:sticky right-5 select-none border-gray-300 rounded-full text-gray-500 p-2 hover:cursor-pointer hover:text-gray-800">
                            <NavigateNextIcon/>
                        </div>

                        <div
                            className="h-full px-6 lg:flex flex-col items-center justify-between me-2 ms-2 ">
                            <p className="text-white w-full text-center text-3xl/7">پیشنهاد شگفت
                                انگیز</p>
                            <p className="text-white w-11/12 text-center text-2xl flex justify-between items-center">
                                <span
                                    className="bg-white text-black rounded-sm p-1 text-[1.1rem]">10</span> :
                                <span
                                    className="bg-white text-black rounded-sm p-1 text-[1.1rem]">10</span> :
                                <span
                                    className="bg-white text-black rounded-sm p-1 text-[1.1rem]">10
                                 </span></p>
                            <p className="text-white w-15 text-center text-7xl">%</p>
                            <span
                                className="text-white w-15 text-center text-7xl -mt-14 me-2 -rotate-90">)</span>
                            <p className="text-white w-full text-center text-nowrap"> مشاهده
                                همه {" >"} </p>
                        </div>

                        <div className="w-full h-full flex flex-row items-start justify-start">
                            <div className="bg-white rounded-xs h-full min-w-40  sm:-ms-6 me-1 "></div>
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
                        className="bg-white border absolute left-2 select-none border-gray-300 rounded-full text-gray-500 p-2 hover:cursor-pointer hover:text-gray-800">
                        <NavigateBeforeIcon/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuperSuggest;