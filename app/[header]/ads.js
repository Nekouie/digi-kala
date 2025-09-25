import Link from "next/link";

const Ads = () => {
    return (
        <>
            <Link href="/"
                  className={"w-full h-16 flex sticky z-999 top-0 text-center items-center" +
                      " bg-gradient-to-l from-emerald-950 to-emerald-800"}>
                <p className={"text-white w-full  h-fit flex justify-center items-center " +
                    "xl:font-light font-bold" +" xl:text-[2.3vh] text-md"}>تو دیجی کالا یه
                    چیزی پین شده | دیجی پین
                </p>
            </Link>
        </>
    )
}

export default Ads;