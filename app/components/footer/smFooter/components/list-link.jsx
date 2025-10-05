"use client"

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {useState} from "react";
import Link from "next/link";

const ListLink = () => {

    const [openTitle, setOpenTitle] = useState(null);

    const handleOpen = (title) => {
        setOpenTitle(openTitle === title ? "" : title);
    }

    return (
        <>
            <div className="w-full border-b border-gray-300 px-5">
                <div className="w-full  p-1 border-b border-gray-300">
                    <div className="flex justify-between py-3 " onClick={() => handleOpen("ba digi")}>
                        <p className="text-sm font-[500]">با دیجی کالا</p>
                        {openTitle === "ba digi"? <ExpandLess/>: <ExpandMore/>}
                    </div>
                    {openTitle === "ba digi" ? (
                        <div className="flex flex-col">
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>اتاق خبر دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فروش در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فرصت‌های شغلی</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>گزارش تخلف در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>تماس با دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>درباره دیجی‌کالا</Link>
                        </div>
                    ) : ("")}
                </div>
                <div className="w-full  p-1 border-b border-gray-300">
                    <div className="flex justify-between py-3 " onClick={() => handleOpen("khadamat")}>
                        <p className="text-sm  font-[500]">خدمات مشتریان</p>
                        {openTitle === "khadamat"? <ExpandLess/>: <ExpandMore/>}
                    </div>
                    {openTitle === "khadamat" ? (
                        <div className="flex flex-col">
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>اتاق خبر دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فروش در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فرصت‌های شغلی</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>گزارش تخلف در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>تماس با دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>درباره دیجی‌کالا</Link>
                        </div>
                    ) : ("")}
                </div>
                <div className="w-full  p-1 border-b border-gray-300">
                    <div className="flex justify-between py-3 " onClick={() => handleOpen("rahnama")}>
                        <p className="text-sm  font-[500]">راهنمای خرید از دیجی کالا</p>
                        {openTitle === "rahnama"? <ExpandLess/>: <ExpandMore/>}
                    </div>
                    {openTitle === "rahnama" ? (
                        <div className="flex flex-col">
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>اتاق خبر دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فروش در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>فرصت‌های شغلی</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>گزارش تخلف در دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>تماس با دیجی‌کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>درباره دیجی‌کالا</Link>
                        </div>
                    ) : ("")}
                </div>
                <div className="w-full  p-1 border-b-1 border-gray-100">
                    <div className="flex justify-between py-3 " onClick={() => handleOpen("shoraka")}>
                        <p className="text-sm font-[500]">شرکای تجاری</p>
                        {openTitle === "shoraka"? <ExpandLess/>: <ExpandMore/>}
                    </div>
                    {openTitle === "shoraka" ? (
                        <div className="flex flex-col">
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>پاسخ به پرسش‌های متداول</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>رویه‌های بازگرداندن کالا</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>شرایط استفاده</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>حریم خصوصی</Link>
                            <Link className="text-[0.85rem] text-gray-600 py-3" href={"/"}>گزارش باگ</Link>
                        </div>
                    ) : ("")}
                </div>
            </div>
        </>
    )
}

export default ListLink