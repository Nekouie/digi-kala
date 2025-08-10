import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const UserItems = () => {
    return (
        <>
            <div className="w-fit h-full flex items-center justify-center bg-white rounded-md">
                <NotificationsNoneIcon className="text-gray-800 scale-100 ml-4 " />
                <div className="border border-gray-300 rounded-lg px-4 py-1 flex items-center justify-center">
                    <LoginIcon className="text-gray-800  scale-100 ml-2" />
                    <p className="text-black text-xs font-[600]">ورود | ثبت نام</p>
                </div>
                <div className="mr-2">
                    <span className="text-xl text-gray-300 mr-1">|</span>
                    <ShoppingCartIcon className="mr-4 text-gray-700" />
                </div>
            </div>
        </>
    )
}

export default UserItems;