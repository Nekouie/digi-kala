import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import logo from '../../assets/footerlogo2.webp';
import Image from 'next/image';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandLess from "@mui/icons-material/ExpandLess";

const DigiContact = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center px-5  mt-10 wrap-normal">
                <div className="bg-gray-100 text-xs px-3 py-1 rounded-4xl flex-wrap flex items-center justify-center">
                    <p>رفتن به بالا</p>
                    <ExpandLessIcon className="scale-70" />
                </div>
                <div className="w-full flex items-center justify-between flex-row py-1 border-b border-b-gray-200">
                    <div className="w-12 flex items-center justify-center bg-gray-300 rounded-full p-2">
                        <HeadsetMicIcon/>
                    </div>
                    <div className="w-full ms-4 flex-wrap text-sm/7">
                        <p>تماس با پشتیبانی</p>
                        <p className="text-gray-500">7 روز هفنه، 24 ساعت</p>
                    </div>
                    <div className="bg-gray-100 rounded-full px-4 py-2 text-xs">
                        <p>تماس</p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between flex-row py-1 border-b border-b-gray-200">
                    <div className="flex items-center justify-center w-12">
                        <Image className="rounded-full" src={logo} alt="logo" />
                    </div>
                    <div className="w-full ms-4 text-sm/7">
                        <p>اپلیکیشن دیجی‌کالا</p>
                        <p className="text-gray-500">تجربه خرید بهتر در</p>
                    </div>
                    <div className="bg-gray-100 rounded-full  px-4 py-1.5">
                        <p className="text-gray-900 text-xs">دانلود</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DigiContact