import Image from "next/image";
import SugImages from "@/public/images/suggestionImages/images";

const SecondPic = () => {
    return (
        <>
            <div className="w-full lg:h-65 h-35 flex flex-row justify-around flex-wrap mt-3">
                <Image className="rounded-3xl hover:cursor-pointer lg:w-1/4  w-1/2  object-fill pe-2" src={SugImages.kasra} alt="pic_4"/>
                <Image className="rounded-3xl hover:cursor-pointer lg:w-1/4  w-1/2  object-cover px-2" src={SugImages.nescafe} alt="pic_4"/>
                <Image className="rounded-3xl hover:cursor-pointer lg:w-1/4  w-1/2  object-cover px-2" src={SugImages.khodro} alt="pic_4"/>
                <Image className="rounded-3xl hover:cursor-pointer lg:w-1/4  w-1/2  object-cover ps-2" src={SugImages.laFarrerr} alt="pic_4"/>
            </div>
        </>
    )
}

export default SecondPic;