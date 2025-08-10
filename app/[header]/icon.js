import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import {Typography} from "@mui/material";

const Icon = () => {
    return (
        <>
            <div className="w-fit flex ml-5 items-center justify-center text-white wrap-anywhere">
                <MoodRoundedIcon className="text-red-600 scale-200 ml-4" />
                <Typography variant="p" className="text-red-600 text-4xl text-nowrap">دیجی کالا</Typography>
            </div>
        </>
    )
}

export default Icon;