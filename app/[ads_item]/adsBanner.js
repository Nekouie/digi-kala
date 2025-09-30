import banner from "./assets/3.webp"
import Image from "next/image"

const AdsBanner = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <Image className="lg:object-cover object-center h-50 lg:h-100" src={banner} alt=""/>
            </div>
        </>
    )
}

export default AdsBanner;