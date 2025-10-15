import Image from "next/image";
import SugImages from "@/public/images/suggestionImages/images";

const FirstImages = () => {
    return (
        <>
            <div className="w-full h-fit flex flex-row justify-around flex-wrap">
                <Image className="rounded-3xl hover:cursor-pointer  lg:w-1/4 w-1/2  object-cover pe-2" src={SugImages.shemsh} alt="pic_1"/>
                <Image className="rounded-3xl hover:cursor-pointer  lg:w-1/4 w-1/2 object-cover px-2" src={SugImages.abzar} alt="pic_2"/>
                <Image className="rounded-3xl hover:cursor-pointer  lg:w-1/4 w-1/2 object-cover px-2" src={SugImages.zibaei} alt="pic_3"/>
                <Image className="rounded-3xl hover:cursor-pointer  lg:w-1/4 w-1/2 object-cover ps-2" src={SugImages.lux} alt="pic_4"/>
            </div>
        </>
    )
}

export default FirstImages;