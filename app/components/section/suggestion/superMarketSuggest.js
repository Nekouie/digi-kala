import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SugImages from "@/public/images/suggestionImages/images";
import Image from "next/image"

const SuperMarketSuggest = () => {

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

    return (
        <>
            <div
                className="bg-red hidden w-full h-30 lg:flex flex-row bg-gray-200 rounded-2xl mt-5  justify-around items-center">
                <div className="flex hover:cursor-pointer w-full h-full flex-row items-center">
                    <div className="flex items-center justify-start w-1/2">
                        <Image className="ms-10" src={SugImages.fresh} alt="fresh" />
                        <Image className="ms-6"  src={SugImages.freshText} alt="freshText" />
                        <div
                            className="flex items-center justify-between bg-green-600 rounded-2xl py-1 px-3 ms-6 text-nowrap">
                            <p className="text-white text-[1rem]">تا 50% تخفیف</p>
                        </div>
                    </div>
                    <div className="  w-1/2 flex items-center justify-around ">
                        <div className={"flex flex-row mr-2 w-full"}>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_1} alt="item_1" />
                                </div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_2} alt="item_2" />
                                </div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_3} alt="item_3" />
                                </div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_4} alt="item_4" />
                                </div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_5} alt="item_5" />
                                </div>
                            </StyledBadge>
                            <StyledBadge badgeContent={"50%"}>
                                <div className={"bg-white rounded-full w-[4rem] h-[4rem] m-1 flex items-center justify-center"}>
                                    <Image className="w-13 rounded-full" src={SugImages.item_6} alt="item_6" />
                                </div>
                            </StyledBadge>

                        </div>
                        <div className="bg-white rounded-3xl py-3 px-4 text-nowrap me-10 flex flex-row justify-center items-center ">
                            <p className={"text-green-600 text-xs font-[500]"}>بیش از 100 کالا </p>
                            <ArrowBackIcon className="scale-80 text-green-600 ms-1" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SuperMarketSuggest;