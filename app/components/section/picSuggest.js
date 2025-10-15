import FirstImages from "@/app/components/section/suggestion/firstImages";
import SuperMarketSuggest from "@/app/components/section/suggestion/superMarketSuggest";
import SecondPic from "@/app/components/section/suggestion/secondPic";

const PicSuggest = () => {
    return (
        <>
            <div className="w-full flex h-fit flex-col justify-start items-center mt-5">
                <FirstImages/>
                <SuperMarketSuggest/>
                <SecondPic/>
            </div>
        </>
    )
};

export default PicSuggest;