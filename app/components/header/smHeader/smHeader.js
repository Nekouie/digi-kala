import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import typography from "@/app/components/header/smHeader/assets/typography.svg";
import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {useEffect, useState} from "react";

const SmHeader = () => {

    const [hClient, setHClient] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHClient(window.scrollY > 130);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [hClient]);


    return (
        <>
            <div
                className="lg:hidden sticky text-nowrap px-5 w-full h-full flex flex-col items-center bg-white justify-center p-2">
                <div className="w-full h-full flex items-center justify-between flex-row bg-white ">
                    <div
                        className={"w-11/12 relative bg-gray-200 py-2 px-5 h-full rounded-xl" +
                            " flex" +
                            " items-center" +
                            " justify-start"}>
                        <SearchIcon className="text-gray-400 scale-140 me-5"/>
                        <p className="text-gray-400 font-[500]">جستجو در</p>
                        <Image className="scale-40 -ms-12" src={typography} alt="typo"/>
                        <PageviewOutlinedIcon
                            className="text-violet-600 absolute left-4 scale-130"/>
                    </div>
                    <div
                        className="py-5 px-4 h-full bg-gray-200 flex justify-center items-center rounded-xl">
                        <NotificationsNoneIcon className="text-gray-600 scale-140"/>
                    </div>
                </div>

            </div>
            <div
                className={`w-full 
                    ${hClient ? "-translate-y-15 " : "translate-y-0" +
                    " "} max-h-10 lg:hidden py-7 bg-white transition-all absolute -bottom-12   duration-500 text-sm -z-999 flex flex-row items-center justify-start`}>

                <LocationOnOutlinedIcon className="text-gray-600 scale-110 me-2"/>
                <button>انتخاب استان و شهر</button>
                <NavigateBeforeIcon/>
            </div>


        </>
    )
}

export default SmHeader;