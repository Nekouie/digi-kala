import Ads from "@/app/components/header/ads";
import HeaderContent from "@/app/components/header/headerContent";

const Header = () => {
    return (
        <>
            <div className="w-full h-full ">
                <Ads/>
                <HeaderContent />
            </div>
        </>
    )
}

export default Header;