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
            <div className="w-full h-full flex flex-col justify-center items-center relative">
                <Ads/>
                <Header/>
                <div className="xl:max-w-400 xl:px-26 sm:px-6 sm:w-full  flex flex-col justify-center items-center relative">
                    <Story/>
                    <div className="w-400">
                        <AdsBanner/>
                    </div>
                    <OnlineChat/>
                    <SuperMarket/>

                    <ServiceCategories/>
                    <SuperSuggest/>
                    <PicSuggest/>
                </div>
            </div>
        </>
    )
}

export default Home