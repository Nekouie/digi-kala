import banner from "./assets/3.webp"
import Image from "next/image"

const AdsBanner = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <Image className="object-cover h-100" src={banner} alt=""/>
            </div>
        </>
    )
}

export default AdsBanner;