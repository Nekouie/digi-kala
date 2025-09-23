const SuperSuggest = () => {
    return (
        <>
            <div className="w-full h-[20rem] flex items-center justify-center mt-3">
                <div
                    className="w-10/12 h-full relative bg-red-600 rounded-2xl py-5 flex justify-center items-center">

                    <div className={"relative flex flex-row items-center justify-start snap-x" +
                        " scroll-smooth" +
                        " h-full w-full" +
                        " mr-8" +
                        " overflow-x-hidden scroll-smooth overflow-y-hidden"}>
                        <div
                            className="h-full flex flex-col items-center justify-between me-10 ms-2 ">
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
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1 "></div>
                        <div className="bg-white rounded-sm h-full min-w-1/8 me-1"></div>
                    </div>

                    <div
                        className="bg-white border absolute left-2 border-gray-300 rounded-full text-gray-500 text-[1.5rem] px-3 hover:cursor-pointer hover:text-gray-800">{">"}</div>

                </div>
            </div>
        </>
    )
}

export default SuperSuggest;