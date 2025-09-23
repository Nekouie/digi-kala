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
            <div className="flex content-center h-[100vh] flex-col justify-start items-center mt-5 ">
                <div className="w-10/12 h-100 flex flex-row justify-between">
                    <Image className="rounded-3xl w-5/21" src={shemsh} alt="pic_1"/>
                    <Image className="rounded-3xl w-5/21" src={abzar} alt="pic_2"/>
                    <Image className="rounded-3xl w-5/21" src={zibaei} alt="pic_3"/>
                    <Image className="rounded-3xl w-5/21" src={lux} alt="pic_4"/>
                </div>
                <div
                    className="bg-red w-10/12 content-center min-h-[150px]  flex text-nowrap object-none bg-gray-200 rounded-2xl mt-4  justify-start items-center">
                    <div className="flex h-full flex-row items-center object-fill w-10/12">
                        <p className="font-bold text-green-700 text-[50px] ms-30">شگفت انگیز سوپر
                            مارکتی</p>
                        <div
                            className="flex items-center justify-between bg-green-600 rounded-2xl py-1 px-2 ms-6">
                            <p className="text-white text-[40px]">تا 50 % تخفیف</p>
                        </div>
                        <div className={"flex flex-row mr-70 w-100 container"}>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-2/12 h-[4rem] m-1"}></div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1"}></div>
                            </StyledBadge>
                        </div>
                        <div className="bg-white w-2/12 rounded-3xl py-3 px-4 left-10">
                            <p className={"text-green-600 text-2/12"}>بیش از 100 کالا {"-->"}</p>
                        </div>
                    </div>
                </div>
                <div className="w-10/12 flex flex-row justify-around mt-5">
                    <Image className="rounded-3xl w-1xl" src={kasra} alt="pic_4"/>
                    <Image className="rounded-3xl w-3xl" src={nescafe} alt="pic_4"/>
                    <Image className="rounded-3xl w-3xl" src={abzarKhodoro} alt="pic_4"/>
                    <Image className="rounded-3xl w-3xl" src={lafarrerr} alt="pic_4"/>
                </div>
            </div>
        </>
    )
}

export default PicSuggest;