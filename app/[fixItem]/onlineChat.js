import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const OnlineChat = () => {
    return (
        <>
        <div className="hidden w-12 h-12 rounded-full bg-red-500 fixed bottom-10 right-10 z-999 lg:flex items-center justify-center">
            <HeadsetMicIcon className=" text-white " />
        </div>
        </>
    )
}
export default OnlineChat