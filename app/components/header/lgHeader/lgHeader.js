import IconHeader from "@/app/components/header/lgHeader/components/iconHeader";
import Search from "@/app/components/header/lgHeader/components/search";
import UserItems from "@/app/components/header/lgHeader/components/userItems";
import Categories from "@/app/components/header/lgHeader/components/categories";
import ChooseCity from "@/app/components/header/lgHeader/components/chooseCity";
import {useEffect, useState} from "react";

const LgHeader = () => {

    const [noContent, setNoContent] = useState(false);

    useEffect(() => {
        const handleContent = () => {
            setNoContent(window.scrollY > 165);
        }
        window.addEventListener("scroll", handleContent);
        return () => {handleContent()}
    }, [noContent]);

    return (
        <>
            <div className={"lg:flex w-full max-w-400 hidden px-2 pt-4 z-900 bg-white text-nowrap" +
                " flex-col" +
                " justify-center" +
                " items-center"}>
                <div className="w-full flex h-10 items-center justify-between">
                        <div className="flex items-center max-w-3/4 justify-center">
                            <IconHeader/>
                            <Search/>
                        </div>
                        <UserItems/>
                </div>
            </div>
            <div className={`w-full text-nowrap absolute -bottom-14 -z-900 bg-white ${!noContent? "translate-y-0" : "-translate-y-10"} transition-transform hidden lg:flex items-center justify-between mt-3`}>
                <Categories/>
                <ChooseCity/>
            </div>
        </>
    )
}

export default LgHeader;