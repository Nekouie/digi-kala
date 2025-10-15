import Story from "@/app/components/section/story";
import Slider from "@/app/components/section/slider";
import ServiceCategories from "@/app/components/section/serviceCategories";
import SuperSuggest from "@/app/components/section/superSuggest";
import PicSuggest from "@/app/components/section/picSuggest";
import OnlineChat from "@/app/components/fixed/onlineChat/onlineChat";
import SuperMarket from "@/app/components/fixed/superMarket/superMarket";


const MainPage = () => {
    return (
        <>
            <div
                className="lg:max-w-330 lg:px-2 lg:mt-40  h-fit w-full flex flex-col justify-center items-center">
                <Story/>
                <Slider/>
                <ServiceCategories/>
                <SuperSuggest/>
                <PicSuggest/>
                <OnlineChat/>
                <SuperMarket/>
            </div>
        </>
    )
}

export default MainPage;