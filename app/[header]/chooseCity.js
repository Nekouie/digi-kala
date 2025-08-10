import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {Typography} from "@mui/material";

const ChooseCity = () => {
    return(
        <>
            <div className="w-fit h-fit text-center hidden lg:block bg-orange-300/10 rounded-2xl mx-5 mt-1 py-1 px-4 ">
                <LocationOnOutlinedIcon className="text-orange-500 ml-2" />
                <Typography variant="p" className="text-orange-500/80 text-xs font-bold" >شهر خود را انتخاب کنید</Typography>
            </div>
        </>
    )
}

export default ChooseCity;