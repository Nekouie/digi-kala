import Image from "next/image";

import superMarket from "@/app/components/section/services/assets/supermarket.png"
import iphone from "@/app/components/section/services/assets/iphone.png"
import tala from "@/app/components/section/services/assets/tala.png"
import etebar from "@/app/components/section/services/assets/etebar.png"
import fc26 from "@/app/components/section/services/assets/fc26.png"
import school from "@/app/components/section/services/assets/school.png"
import plus from "@/app/components/section/services/assets/plus.png"
import sekke from "@/app/components/section/services/assets/sekke.png"
import takhfif from "@/app/components/section/services/assets/takhfif.png"

const ServiceCategories = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center -mt-10">
                <div className="w-full h-60 flex overflow-y-hidden overflow-x-auto list-container relative flex-row items-start lg:justify-between justify-start pt-20 xl:px-20 px-6     text-center">
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={superMarket} alt={superMarket} />
                        <p>سوپر مارکت</p>
                    </div>
                    <div className="lg:flex hover:cursor-pointer flex-col hidden items-center justify-center  me-5 w-19">
                        <Image className="w-15 min-w-15 mb-2" src={iphone} alt={superMarket} />
                        <p>آیفون 17 ببر</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={tala} alt={superMarket} />
                        <p>طلای‌دیجیتال بدون‌کارمزد</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={etebar} alt={superMarket} />
                        <p>دریافت اعتبار</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={fc26} alt={superMarket} />
                        <p>خرید FC26</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={school} alt={superMarket} />
                        <p>بازگشت به مدرسه</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={plus} alt={superMarket} />
                        <p>اشتراک پلاس</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={sekke} alt={superMarket} />
                        <p>سکه طلاتو بفروش</p>
                    </div>
                    <div className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                        <Image className="w-15 min-w-15 mb-2" src={takhfif} alt={superMarket} />
                        <p>تخفیف بومی‌محلی</p>
                    </div>
                    <div className="flex hover:cursor-pointer  flex-col items-center justify-center w-19 me-2" >
                        <div className="w-15 h-15  min-w-15 min-h-15 py-5 mb-2 bg-gray-400 rounded-full flex flex-row items-center justify-center">
                            ...
                        </div>
                        <p>بیشتر</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceCategories;