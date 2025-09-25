"use client"

import lux from "./assets/lux.webp"
import shemsh from "./assets/shemsh.webp"
import abzar from "./assets/abzar.webp"
import zibaei from "./assets/zibaei.webp"
import abzarKhodoro from "./assets/abzarKhodoro.webp"
import kasra from "./assets/kasra.webp"
import lafarrerr from "./assets/laFarrerr.gif"
import nescafe from "./assets/nescafe.webp"

import Image from "next/image"
import Badge from "@mui/material/Badge"
import {styled} from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 10,
        top: 65,
        padding: '0 4px',
        backgroundColor: "#d93333",
        color: "#ffffff",
        fontWeight: 600
    },
}));

const PicSuggest = () => {
    return (
        <>
            <div className="w-full flex h-[50rem] flex-col justify-start items-center mt-5">
                <div className="w-full h-fit flex flex-row justify-between ">
                    <Image className="rounded-3xl  xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={shemsh} alt="pic_1"/>
                    <Image className="rounded-3xl  xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={abzar} alt="pic_2"/>
                    <Image className="rounded-3xl  xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={zibaei} alt="pic_3"/>
                    <Image className="rounded-3xl xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={lux} alt="pic_4"/>
                </div>
                <div
                    className="bg-red w-full h-1/5 flex flex-row bg-gray-200 rounded-2xl mt-5  justify-around items-center">
                    <div className="flex w-full h-full flex-row items-center">
                        <div className="flex items-center justify-start w-1/2">
                            <p className="font-bold text-green-700 text-[1.7rem] ms-20">شگفت انگیز سوپر
                                مارکتی</p>
                            <div
                                className="flex items-center justify-between bg-green-600 rounded-2xl py-1 px-3 ms-6 text-nowrap">
                                <p className="text-white text-[1rem]">تا 50 % تخفیف</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-around ">
                            <div className={"flex flex-row mr-2 w-full"}>
                                <StyledBadge badgeContent={"50%"}>
                                    <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                                </StyledBadge>
                                <StyledBadge badgeContent={"50%"}>
                                    <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                                </StyledBadge>
                                <StyledBadge badgeContent={"50%"}>
                                    <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                                </StyledBadge>
                                <StyledBadge sx={{display:{xs :"none" , xl:"block"}}} badgeContent={"50%"}>
                                    <div className={"bg-white rounded-full w-[4rem]" +
                                        " h-[4rem] m-1"}></div>
                                </StyledBadge>
                            </div>
                            <div className="bg-white rounded-3xl py-3 px-4 text-nowrap me-10">
                                <p className={"text-green-600 text-[1rem]"}>بیش از 100 کالا {"-->"}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full flex flex-row justify-around h-2/5 mt-5">
                    <Image className="rounded-3xl xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={kasra} alt="pic_4"/>
                    <Image className="rounded-3xl xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={nescafe} alt="pic_4"/>
                    <Image className="rounded-3xl xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={abzarKhodoro} alt="pic_4"/>
                    <Image className="rounded-3xl xl:w-75 xl:h-65 sm:w-70 sm:h-fit" src={lafarrerr} alt="pic_4"/>
                </div>
            </div>
        </>
    )
}

export default PicSuggest;