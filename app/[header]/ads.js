import Link from "next/link";

const Ads = () => {
    return (
        <>
            <Link href="/"
                className={"w-full h-15 flex justify-center items-center text-center" +
                    " bg-gradient-to-l from-emerald-950 to-emerald-800"}>
                <p className={"text-white font-bold text-xl"}>تو دیجی کالا یه
                    چیزی پین شده | دیجی پین
                </p>
            </Link>
        </>
    )
}

export default Ads;