"use client"
import SearchIcon from '@mui/icons-material/Search';
import {InputBase} from "@mui/material";

const Search = () => {
    return (
        <>
            <div className="w-180 h-12 lg:flex items-center mr-4 p-4 hidden bg-gray-100 rounded-md">
                <SearchIcon className="text-gray-400 pr-1 scale-120" />
                <InputBase className={"w-full h-full rounded-sm" +
                    "  pr-4"} placeholder="جستجو"></InputBase>
            </div>
        </>
    )
}

export default Search