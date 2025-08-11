import banner from "./assets/3.webp"
import Image from "next/image"

const AdsBanner = () => {
    return (
        <>
            <div className="w-full ">
                <Image className="h-100 object-cover" src={banner} alt=""/>
            </div>
        </>
    )
}

export default AdsBanner;