import footerLogo from "./assets/footerlogo2.webp"
import bazar from "./assets/coffe-bazzar.svg"
import myket from "./assets/myket.svg"
import sibApp from "./assets/sib-app.svg"
import more from "./assets/More.svg"
import Image from "next/image"
const Download = () => {
    return (
        <>
            <div className=" w-full h-30 p-5 ">
                <div className="w-full h-full rounded-2xl flex items-center flex px-5 flex-row justify-between text-nowrap bg-slate-700">
                    <div className="flex flex-row w-1/2 justify-start items-center">
                        <Image className="w-12 h-12" src={footerLogo} alt="logo" />
                        <p className="text-white mr-10 text-2xl">دانلود اپلیکیشن دیجی کالا</p>
                    </div>
                    <div className="flex flex-row w-1/2 justify-end items-center">
                        <Image className="scale-110 me-5" src={bazar} alt="bazar" />
                        <Image className="me-5" src={myket} alt="myket" />
                        <Image src={sibApp} alt="sibApp" />
                        <div className="bg-white ms-5 w-12 h-12 flex items-center justify-center rounded-lg">
                            <Image className="scale-200" src={more} alt="more" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download;