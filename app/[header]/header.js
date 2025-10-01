import Icon from "@/app/[header]/icon";
import Search from "@/app/[header]/search";

import {Box} from "@mui/material";
import UserItems from "@/app/[header]/userItems";
import Categories from "@/app/[header]/categories";
import ChooseCity from "@/app/[header]/chooseCity";


const Header = () => {
    return (
        <>
            <Box className={"min-w-full min-h-16 lg:fixed sticky lg:top-16 top-0  z-999" +
                " flex-col" +
                " justify-start" +
                " items-center" +
                " border-b-2 w-full text-nowrap border-gray-600/30  shadow-sm" +
                " fixed flex flex-col justify-between  items-center " +
                " bg-white"}>
                <div className={"flex min-[1800px]:min-w-380 max-w-full min-w-full     " +
                    " flex-col" +
                    " justify-center" +
                    " items-center"}>
                    <div className="w-full flex h-10 items-center justify-between mt-1">
                        <div
                            className="w-fit max-w-3/4 h-full lg:flex hidden    items-center justify-start mr-3 relative">
                            <Icon/>
                            <Search/>
                        </div>
                        <div className="w-1/2 lg:flex hidden items-center justify-end ml-1">
                            <UserItems/>
                        </div>
                    </div>
                    <div className="w-full hidden lg:flex items-center justify-between mt-3">
                        <Categories/>
                        <ChooseCity/>
                    </div>
                </div>

            </Box>
        </>
    )
}

export default Header