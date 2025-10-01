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
import DigiContact from "@/app/[footer]/underLg/digi-contact";
import ListLink from "@/app/[footer]/underLg/list-link";
import BioSm from "@/app/[footer]/underLg/bio-sm";

const Home = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden">
                    <Ads/>
                    <Header/>
                <div
                    className="lg:max-w-430 lg:px-20 lg:mt-40  h-fit w-full flex flex-col justify-center items-center">
                    <Story/>
                    <AdsBanner/>
                    <OnlineChat/>
                    <SuperMarket/>
                    <ServiceCategories/>
                    <SuperSuggest />
                    <PicSuggest/>
                </div>
                {/*footer_lg*/}
                <div className="xl:max-w-380 hidden lg:block">
                    <CompanyInf/>
                    <Links/>
                    <Download/>
                    <DigiBio/>
                    <Copyright/>
                </div>
                <div
                    className="lg:hidden w-23/24 flex flex-col justify-center items-center relative">
                    <DigiContact/>
                    <ListLink/>
                    <BioSm/>
                </div>
            </div>
        </>
    )
}

export default Home