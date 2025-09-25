import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {Tooltip, Typography} from "@mui/material";
import Link from "next/link";
import { styled } from '@mui/material/styles';

const ChooseCity = () => {



    return (
        <>
            <Tooltip   slotProps={{
                popper: {
                    sx: {
                        [`& .MuiTooltip-tooltip`]: {
                            backgroundColor: "#3f4162",
                            color: "#fff",
                            fontSize: "0.8rem",
                            fontFamily: "vazirmatn",
                            borderRadius: "0.3rem",
                            padding: "0.8rem",
                            fontWeight: "400"

                        },
                    },
                },
            }} title={"برای مشاهده سرویس ها،کالا ها و" +
                " تخفیف" +
                " ها،شهر را" +
                " وارد" +
                " کنید."}>
                <Link href="/"
                      className="w-fit h-fit text-center hidden lg:block bg-orange-300/10 rounded-2xl ml-5 mt-1 py-1 px-4 ">
                    <LocationOnOutlinedIcon className="text-orange-500 ml-2"/>
                    <Typography variant="p" className="text-orange-500/80 text-xs font-bold">شهر خود
                        را
                        انتخاب کنید</Typography>
                </Link>
            </Tooltip>
        </>
    )
}

export default ChooseCity;