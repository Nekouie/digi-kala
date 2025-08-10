import Icon from "@/app/[header]/icon";
import Search from "@/app/[header]/search";

import {Box} from "@mui/material";
import UserItems from "@/app/[header]/userItems";
import Categories from "@/app/[header]/categories";
import ChooseCity from "@/app/[header]/chooseCity";


const Header = () => {
    return (
        <>
            <Box className={"border-b-2 w-full text-nowrap border-gray-600/30 h-28 shadow-sm fixed" +
                " bg-white"} >
                <div className="w-full flex h-1/2 items-center justify-between mt-1">
                    <div className="w-10/12 h-full flex items-center justify-start mr-6">
                        <Icon/>
                        <Search />
                    </div>
                    <div className="w-3/12 flex items-center justify-end ml-5">
                        <UserItems/>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <Categories/>
                    <ChooseCity/>
                </div>
            </Box>
        </>
    )
}

export default Header