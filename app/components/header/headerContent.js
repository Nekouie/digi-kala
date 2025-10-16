import SmHeader from "@/app/components/header/smHeader/smHeader";
import LgHeader from "@/app/components/header/lgHeader/lgHeader";


const HeaderContent = () => {
    return (
        <>
            <div className={"w-full h-fit fixed lg:top-12 top-0 z-899" +
                " border-b-2 border-gray-600/30 flex justify-center items-center  shadow-sm" +
                " bg-white"}>
                <LgHeader/>
                <SmHeader/>

            </div>
        </>
    )
}

export default HeaderContent