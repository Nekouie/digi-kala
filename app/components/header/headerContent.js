import SmHeader from "@/app/components/header/smHeader/smHeader";
import LgHeader from "@/app/components/header/lgHeader/lgHeader";


const HeaderContent = () => {
    return (
        <>
            <div className={"w-full h-fit lg:fixed lg:top-10 sticky top-0 z-999" +
                " border-b-2 border-gray-600/30 flex flex-col justify-center items-center  shadow-sm" +
                " bg-white"}>
                <LgHeader/>
                <SmHeader/>

            </div>
        </>
    )
}

export default HeaderContent