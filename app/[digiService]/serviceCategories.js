import Image from "next/image";

import superMarket from "./assets/supermarket.png"
import iphone from "./assets/iphone.png"
import tala from "./assets/tala.png"
import etebar from "./assets/etebar.png"
import fc26 from "./assets/fc26.png"
import school from "./assets/school.png"
import plus from "./assets/plus.png"
import sekke from "./assets/sekke.png"
import takhfif from "./assets/takhfif.png"

const ServiceCategories = () => {
    return (
        <>
            <div className="w-full h-30 flex flex-row items-center justify-between pt-20 mb-20 xl:px-20 px-6     text-center">
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={superMarket} alt={superMarket} />
                    <p>سوپر مارکت</p>
                </div>
                <div className="flex flex-col items-center justify-center  w-19">
                    <Image className="w-16 mb-2" src={iphone} alt={superMarket} />
                    <p>آیفون 17 ببر</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={tala} alt={superMarket} />
                    <p>طلای‌دیجیتال بدون‌کارمزد</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={etebar} alt={superMarket} />
                    <p>دریافت اعتبار</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={fc26} alt={superMarket} />
                    <p>خرید FC26</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={school} alt={superMarket} />
                    <p>بازگشت به مدرسه</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={plus} alt={superMarket} />
                    <p>اشتراک پلاس</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={sekke} alt={superMarket} />
                    <p>سکه طلاتو بفروش</p>
                </div>
                <div className="flex flex-col items-center justify-center w-19">
                    <Image className="w-16 mb-2" src={takhfif} alt={superMarket} />
                    <p>تخفیف بومی‌محلی</p>
                </div>
                <div className="flex flex-col items-center justify-st w-19" >
                    <div className="w-16 py-5 mb-2 bg-gray-400 rounded-full flex flex-row items-center justify-center">
                        ...
                    </div>
                    <p>بیشتر</p>
                </div>
            </div>
        </>
    )
}
export default ServiceCategories;