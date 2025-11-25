import Link from "next/link"

const Links = () => {
    return (
        <>
        <div className="w-full px-5 flex flex-row justify-between items-start mt-10">
            <div className="flex flex-col">
                <p className="mb-3 font-[450] text-lg text-gray-700">با دیجی کالا</p>
                <Link className="text-gray-500 mb-3" href="">اتاق خبر دیجی‌کالا</Link>
                <Link className="text-gray-500 mb-3" href="">فروش در دیجی‌کالا</Link>
                <Link className="text-gray-500 mb-3" href="">فرصت‌های شغلی</Link>
                <Link className="text-gray-500 mb-3" href="">گزارش تخلف در دیجی‌کالا</Link>
                <Link className="text-gray-500 mb-3" href="">تماس با دیجی‌کالا</Link>
                <Link className="text-gray-500 mb-3" href="">درباره دیجی‌کالا</Link>
            </div>
            <div className="flex flex-col">
                <p className="mb-3 font-[450] text-lg text-gray-700">خدمات مشتریان</p>
                <Link className="text-gray-500 mb-3" href="">پاسخ به پرسش‌های متداول</Link>
                <Link className="text-gray-500 mb-3" href="">رویه‌های بازگرداندن کالا</Link>
                <Link className="text-gray-500 mb-3" href="">شرایط استفاده</Link>
                <Link className="text-gray-500 mb-3" href="">حریم خصوصی</Link>
                <Link className="text-gray-500 mb-3" href="">گزارش باگ</Link>
            </div>
            <div className="flex flex-col">
                <p className="mb-3 font-[450] text-lg text-gray-700">راهنمای خرید از دیجی‌کالا</p>
                <Link className="text-gray-500 mb-3" href="">نحوه ثبت سفارش</Link>
                <Link className="text-gray-500 mb-3" href="">رویه ارسال سفارش</Link>
                <Link className="text-gray-500 mb-3" href="">شیوه‌های پرداخت</Link>
            </div>
            <div className="flex flex-col">
                <p className="mb-3 font-[450] text-lg text-gray-700">همراه ما باشید!</p>
                <Link className=" text-lg text-gray-800 mb-3" href="">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</Link>
                <div className="flex h-13 flex-row justify-between">
                    <input className="bg-gray-200 w-65 p-4 me-2 caret-red-600 caret outline-0  placeholder:text-gray-400/75 placeholder:font-mono placeholder:text-lg rounded-lg" type="email" placeholder="ایمیل شما"/>
                    <button className="px-4 bg-gray-300 rounded-lg text-white " type="submit">ثبت</button>
                </div>
            </div>
        </div>
</>
)
}

export default Links