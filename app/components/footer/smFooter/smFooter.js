import DigiContact from "@/app/components/footer/smFooter/components/digi-contact";
import ListLink from "@/app/components/footer/smFooter/components/list-link";
import BioSm from "@/app/components/footer/smFooter/components/bio-sm";

const SmFooter = () => {
    return (
        <>
            <div
                className="lg:hidden w-full flex flex-col justify-center items-center pb-15 relative">
                <DigiContact/>
                <ListLink/>
                <BioSm/>
            </div>
        </>
    )
}

export default SmFooter;