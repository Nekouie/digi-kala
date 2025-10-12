"use client"

import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PersonIcon from '@mui/icons-material/Person';
import {useState} from "react";

const NavBar = () => {

    const [activeTab, setActiveTab] = useState("home");

    const activeTabHandler = (title) => setActiveTab(title);

    return (
        <>
            <div
                className="fixed lg:hidden w-full flex flex-row h-15 bg-white bottom-0 z-999 border-t-1 border-gray-100 ">
                <div onClick={() => activeTabHandler("home")}
                     className={`h-full pb-2 relative pt-1 w-full flex items-center justify-center` +
                         ` flex-col text-gray-400 text-[0.8rem] ${activeTab === "home" ? "text-gray-700" : ""}  before:content-[''] before:absolute before:top-0 before:left-1/2
                     before:h-full before:w-0 before:bg-gray-500 before:opacity-10
                     before:-translate-x-1/2
                     before:transition-all before:duration-600
                     hover:before:w-full hover:before:opacity-0`}>
                    <HomeIcon/>
                    <p>خانه</p>
                </div>
                <div onClick={() => activeTabHandler("category")}
                     className={`h-full pb-2 relative pt-1 w-full flex items-center justify-center` +
                         ` flex-col text-gray-400 text-[0.8rem] ${activeTab === "category" ? "text-gray-700" : ""}  before:content-[''] before:absolute before:top-0 before:left-1/2
                     before:h-full before:w-0 before:bg-gray-500 before:opacity-8
                     before:-translate-x-1/2
                     before:transition-all before:duration-600
                     hover:before:w-full hover:before:opacity-0 `}>
                    <CategoryIcon/>
                    <p>دسته بندی</p>
                </div>
                <div onClick={() => activeTabHandler("basket")}
                     className={`h-full pb-2 relative pt-1 w-full flex items-center justify-center` +
                         ` flex-col text-gray-400 text-[0.8rem] ${activeTab === "basket" ? "text-gray-700" : ""}  before:content-[''] before:absolute before:top-0 before:left-1/2
                     before:h-full before:w-0 before:bg-gray-500 before:opacity-8
                     before:-translate-x-1/2
                     before:transition-all before:duration-600
                     hover:before:w-full hover:before:opacity-0 `}>
                    <ShoppingCartIcon/>
                    <p>سبد خرید</p>
                </div>
                <div onClick={() => activeTabHandler("magnet")}
                     className={`h-full pb-2 relative pt-1 w-full flex items-center justify-center` +
                         ` flex-col text-gray-400 text-[0.8rem] ${activeTab === "magnet" ? "text-gray-700" : ""}  before:content-[''] before:absolute before:top-0 before:left-1/2
                     before:h-full before:w-0 before:bg-gray-500 before:opacity-8
                     before:-translate-x-1/2
                     before:transition-all before:duration-600
                     hover:before:w-full hover:before:opacity-0 `}>
                    <PlayArrowIcon/>
                    <p>مگنت</p>
                </div>
                <div onClick={() => activeTabHandler("myDigi")}
                     className={`h-full pb-2 relative pt-1 w-full flex items-center justify-center` +
                         ` flex-col text-gray-400 text-[0.8rem] ${activeTab === "myDigi" ? "text-gray-700" : ""}  before:content-[''] before:absolute before:top-0 before:left-1/2
                     before:h-full before:w-0 before:bg-gray-500 before:opacity-8
                     before:-translate-x-1/2
                     before:transition-all before:duration-600
                     hover:before:w-full hover:before:opacity-0 `}>
                    <PersonIcon/>
                    <p>دیجی کالای من</p>
                </div>
            </div>
        </>
    )
}

export default NavBar;