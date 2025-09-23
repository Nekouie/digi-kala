import Ads from "./[header]/ads";
import AdsBanner from "@/app/[ads_item]/adsBanner";
import Header from "@/app/[header]/header";
import Story from "@/app/[ads_item]/story";
import OnlineChat from "@/app/[fixItem]/onlineChat";
import SuperMarket from "@/app/[fixItem]/superMarket";
import ServiceCategories from "@/app/[digiService]/serviceCategories";
import SuperSuggest from "@/app/[seggestion]/superSuggest";
import PicSuggest from "@/app/[seggestion]/picSuggest";

const Home = () => {
    return (
        <>
            <div className="w-full fixed top-0 z-10 flex flex-col">
                <Ads/>
            </div>
            <div className="w-full fixed top-15 z-10">
                <Header/>
            </div>

            <div
                className="flex flex-col justify-center items-center mt-45 w-full max-w-[1800px] relative">
                <Story/>
                <AdsBanner/>
                <OnlineChat/>
                <SuperMarket/>
            </div>
            <div className="">
                <ServiceCategories/>
                <SuperSuggest/>
                <PicSuggest/>
            </div>
        </>
    )
}

export default Home