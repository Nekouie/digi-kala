import Link from "next/link";
import Image from "next/image";
import ads from "@/public/images/top-ads/top-ads-sm.gif"

const Ads = () => {
    return (
        <>
            <div className="h-10 lg:fixed sticky top-0 z-979 w-full lg:h-12  ">
                <Link href="./">
                    <Image className={"w-full h-10 object-cover"} src={ads} alt="ads" />
                </Link>
            </div>
        </>
    )
}

export default Ads;