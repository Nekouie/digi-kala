import CompanyInf from "@/app/components/footer/lgFooter/components/companyIn-inf";
import Links from "@/app/components/footer/lgFooter/components/links";
import Download from "@/app/components/footer/lgFooter/components/download";
import DigiBio from "@/app/components/footer/lgFooter/components/digi-bio";
import Copyright from "@/app/components/footer/lgFooter/components/copyright";

const LgFooter = () => {
    return (
        <>
            <div className="xl:max-w-380 hidden lg:block px-4">
                <CompanyInf/>
                <Links/>
                <Download/>
                <DigiBio/>
                <Copyright/>
            </div>
        </>
    )
}

export default LgFooter;