import Ads from "./[header]/ads";
import AdsBanner from "@/app/[ads_item]/adsBanner";
import Header from "@/app/[header]/header";
import Story from "@/app/[ads_item]/story";
import OnlineChat from "@/app/[fixItem]/onlineChat";
import SuperMarket from "@/app/[fixItem]/superMarket";
import ServiceCategories from "@/app/[digiService]/serviceCategories";
import SuperSuggest from "@/app/[seggestion]/superSuggest";
import PicSuggest from "@/app/[seggestion]/picSuggest";
import CompanyInf from "@/app/[footer]/companyIn-inf";
import Download from "./[footer]/download"
import Links from "@/app/[footer]/links";
import DigiBio from "@/app/[footer]/digi-bio";
import Copyright from "./[footer]/copyright"

const Home = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center relative">
                <Ads/>
                <Header/>
                <div className="xl:max-w-380 w-full">
                    <Story/>
                    <div className="xl:max-w-380">
                        <AdsBanner/>
                    </div>
                    <OnlineChat/>
                    <SuperMarket/>

                    <ServiceCategories/>
                    <SuperSuggest/>
                    <PicSuggest/>
                </div>
                {/*footer*/}
                <div className="xl:max-w-380">
                    <CompanyInf/>
                    <Links/>
                    <Download/>
                    <DigiBio/>
                    <Copyright/>
                </div>
            </div>
        </>
    )
}

export default Home