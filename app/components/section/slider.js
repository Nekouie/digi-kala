import banner from "@/app/components/section/story/assets/adsBaner.webp"
import Image from "next/image"

const Slider = () => {
    return (
        <>
            <div className="lg:w-15/12 w-full flex justify-center items-center">
                <Image className="lg:h-100 w-10/3 object-cover" src={banner} alt=""/>
            </div>
        </>
    )
}

export default Slider;