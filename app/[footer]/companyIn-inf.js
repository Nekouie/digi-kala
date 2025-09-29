import logo from "./assets/full-horizontal.svg"
import express from "./assets/express-delivery - Copy.svg"
import cash_d from "./assets/cash-on-delivery - Copy.svg"
import support from "./assets/support - Copy.svg"
import days from "./assets/days-return - Copy.svg"
import orginal from "./assets/original-products - Copy.svg"

import Image from "next/image"

const CompanyInf = () => {
    return (
        <>
            <div
                className="w-full border-t-2 border-gray-200 flex flex-col justify-center items-center">
                <div className="w-full pt-5 h-20 flex flex-row justify-between items-center">
                    <div className="w-50 ms-5">
                        <Image className="w-200" src={logo} alt="logo" layout="responsive"/>
                    </div>
                    <div
                        className="w-30 border me-7 border-gray-400 rounded-lg pe-4 ps-2 py-1.5 flex justify-center items-baseline">
                        <p className="text-gray-400 text-xs font-[500]"> بازگشت به بالا
                            <span
                            className="-rotate-90 inline-block text-xl font-light">{"<"}</span></p>
                    </div>

                </div>
                <div className="w-full h-10 flex flex-row justify-start items-center ps-5">
                    <p className="me-5 text-[0.8rem] text-gray-900 font-light">تلفن پشتیبانی 12312312-021 </p>
                    <span className="text-gray-400">|</span>
                    <p className="ms-5 me-5 text-[0.8rem] text-gray-900 font-light">021-0000000</p>
                    <span  className="text-gray-400">|</span>
                    <p className="ms-5 me-5 text-[0.8rem] text-gray-900 font-light">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>
                <div className="w-11/12 h-30 flex flex-row justify-around items-center ps-5 text-nowrap">
                    <div className="w-15 ms-5 flex flex-col justify-center items-center">
                        <Image src={express} alt="express delivery" layout="responsive" />
                        <p className="text-gray-700 text-xs">امکان تحویل اکسپرس</p>
                    </div>
                    <div className="w-15 ms-5 flex flex-col justify-center items-center">
                        <Image src={cash_d} alt="express delivery" layout="responsive" />
                        <p className="text-gray-700 text-xs">امکان پرداخت درب منزل</p>
                    </div>
                    <div className="w-15 ms-5 flex flex-col justify-center items-center">
                        <Image src={support} alt="express delivery" layout="responsive" />
                        <p className="text-gray-700 text-xs"    >7 روز هفنه,24 ساعته</p>
                    </div>
                    <div className="w-15 ms-5 flex flex-col justify-center items-center">
                        <Image src={days} alt="express delivery" layout="responsive" />
                        <p className="text-gray-700 text-xs">7 روز ضمانت بازگشت کالا</p>
                    </div>
                    <div className="w-15 ms-5 flex flex-col justify-center items-center">
                        <Image src={orginal} alt="express delivery" layout="responsive" />
                        <p className="text-gray-700 text-xs">ضمانت اصل بودن کالا</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyInf;