import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import logo from '../assets/footerlogo2.webp';
import Image from 'next/image';

const DigiContact = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-10 wrap-normal">
                <div className="bg-gray-200 text-sm p-2 rounded-2xl flex-wrap flex items-center justify-center">
                    <p>رفتن به بالا</p>
                    <span className="-rotate-90 ms-4">{"<"}</span>
                </div>
                <div className="w-full flex items-center justify-between flex-row border-b p-4 border-b-gray-200">
                    <div className="w-12 flex items-center justify-center bg-gray-300 rounded-full p-2">
                        <HeadsetMicIcon/>
                    </div>
                    <div className="w-full ms-4 flex-wrap">
                        <p>تماس با پشتیبانی</p>
                        <p className="text-gray-500">7 روز هفنه، 24 ساعت</p>
                    </div>
                    <div className="bg-gray-200 rounded-full px-4 py-1.5">
                        <p>تماس</p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between flex-row p-4 border-b border-b-gray-200">
                    <div className="flex items-center justify-center w-12">
                        <Image className="rounded-full" src={logo} alt="logo" />
                    </div>
                    <div className="w-full ms-4">
                        <p>اپلیکیشن دیجی‌کالا</p>
                        <p className="text-gray-500">تجربه خرید بهتر در</p>
                    </div>
                    <div className="bg-gray-200 rounded-full  px-4 py-1.5">
                        <p className="text-gray-900">دانلود</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DigiContact