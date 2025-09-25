import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SavingsIcon from "@mui/icons-material/Savings";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Link from "next/link"

const Categories = () => {
    return (
        <>
            <div className="w-fit max-w-3/4 flex flex-row items-end mt-2 justify-end">
                <div className="w-f  flex flex-row justify-start items-center">

                    <div className="relative flex justify-center items-center px-1 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <MenuOutlinedIcon className="text-gray-900 scale-70 "/>
                        <Link href={"/"} className="text-gray-900 text-sm font-[450] ">دسته
                            بندی کالا ها </Link>
                    </div>

                    <span className="text-gray-200">|</span>

                    <div className="relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <PercentOutlinedIcon className="text-gray-400 scale-60 "/>
                        <Link href={"/"} className="text-gray-900 text-xs font-[300] ">شگفت
                            انگیز ها </Link>
                    </div>
                    <div className="relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <ShoppingBasketOutlinedIcon className="text-gray-400 scale-60"/>
                        <Link href={"/"} className="text-gray-900  text-xs font-[300] ">سوپر
                            مارکت </Link>
                    </div>
                    <div className="relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <SavingsIcon className="text-gray-400 scale-60"/>
                        <Link href={"/"} className="text-gray-900  text-xs font-[300] ">طلای
                            دیجیتال </Link>
                    </div>
                    <div className="relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <WhatshotIcon className="text-gray-400 scale-60"/>
                        <Link href={"/"} className="text-gray-900  text-xs font-[300] ">پر
                            فروش ترین ها </Link>
                    </div>
                    <span className="text-gray-200">|</span>
                    <div className=" lg:block hidden relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <Link href={"/"}
                              className="text-gray-900  text-xs font-[300]  ">سوالی
                            دارید ؟</Link>
                    </div>
                    <div className="sm:hidden lg:block relative flex justify-center items-center px-2 py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full
                    after:transition-all after:duration-200 not-hover:duration-1100">
                        <Link href={"/"}
                              className="text-gray-900  text-xs font-[300]  ">در
                            دیجیکالا بفروشید!</Link>
                    </div>






                </div>

            </div>
        </>
    )
}

export default Categories;