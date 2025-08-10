import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SavingsIcon from "@mui/icons-material/Savings";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Categories = () => {
    return(
        <>
            <div className="w-fit h-1/12 flex flex-row items-center mt-5 justify-start">
                <div className="w-10/12  flex flex-row justify-start items-center mr-3">
                    <MenuOutlinedIcon className="text-gray-900 scale-70 "/>
                    <p className="text-gray-900 ml-4 text-[0.95rem] font-[450] ">دسته بندی کالا ها </p>
                    <span className="text-gray-200">|</span>
                    <PercentOutlinedIcon className="text-gray-400 scale-60 " />
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] ">شگفت انگیز ها </p>
                    <ShoppingBasketOutlinedIcon className="text-gray-400 scale-60"/>
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] ">سوپر مارکت </p>
                    <SavingsIcon className="text-gray-400 scale-60"/>
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] ">طلای دیجیتال </p>
                    <WhatshotIcon className="text-gray-400 scale-60"/>
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] ">پر فروش ترین ها </p>
                    <PhoneIphoneIcon className="text-gray-400 scale-60"/>
                    <p className="text-gray-900 text-[0.85rem] font-[300] ">خرید کالای کار کرده</p>
                    <span className="text-gray-200 mx-3">|</span>
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] lg:block hidden ">سوالی دارید ؟</p>
                    <p className="text-gray-900 ml-4 text-[0.85rem] font-[300] lg:block sm:hidden" >در دیجیکالا بفروشید!</p>
                </div>

            </div>
        </>
    )
}

export default Categories;