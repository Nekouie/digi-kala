import Ads from "./[header]/ads";
import AdsBanner from "@/app/[ads_item]/adsBanner";
import Header from "@/app/[header]/header";
import Story from "@/app/[ads_item]/story";
import OnlineChat from "@/app/[fixItem]/onlineChat";
import SuperMarket from "@/app/[fixItem]/superMarket";
import ServiceCategories from "@/app/[digiService]/serviceCategories";
import SuperSuggest from "@/app/[seggestion]/superSuggest";

const Home = () => {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Ads/>
                <Header/>
            </div>
            <div className="mt-45">
                <Story />
                <AdsBanner/>
                <OnlineChat/>
                <SuperMarket/>
            </div>
            <ServiceCategories />
            <SuperSuggest/>
          </>
    )
}

export default Home