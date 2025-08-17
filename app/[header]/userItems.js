import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link"

const UserItems = () => {
    return (
        <>
            <div className="w-fit h-full flex items-center justify-center bg-white rounded-md">
                <Link href="/">
                    <NotificationsNoneIcon className="text-gray-800 scale-100 ml-4 " />
                </Link>
                <Link href="/" className="border border-gray-300 rounded-lg px-4 py-1 flex items-center justify-center">
                    <LoginIcon className="text-gray-800  scale-100 ml-2" />
                    <p className="text-black text-xs font-[600]">ورود | ثبت نام</p>
                </Link>
                <div className="mr-2">
                    <span className="text-xl text-gray-300 mr-1">|</span>
                    <Link href="/">
                        <ShoppingCartIcon className="mr-4 text-gray-700" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserItems;