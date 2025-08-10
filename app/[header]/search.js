import SearchIcon from "@mui/icons-material/Search";
import {InputBase} from "@mui/material";

const Search = () => {
    return (
        <>
            <div className="w-6/12 h-3/4 lg:block hidden items-center justify-center bg-gray-100 rounded-md">
                <SearchIcon className="text-gray-400 pr-1 scale-120" />
                <InputBase className={"w-full h-full rounded-sm" +
                    "  pr-4"} placeholder="جستجو"></InputBase>
            </div>
        </>
    )
}

export default Search