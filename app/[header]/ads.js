import Link from "next/link";

const Ads = () => {
    return (
        <>
            <div className=" bg-gradient-to-l from-emerald-950 to-emerald-800 lg:fixed sticky z-999 top-0 w-full h-16   text-center ">
                <Link href="/"
                      className="items-center bg-black">
                    <p className={"text-white w-full  h-fit flex justify-center items-center " +
                        "lg:font-light font-bold" +" lg:text-[3.3vh] pt-3 text-md"}>تو دیجی کالا یه
                        چیزی پین شده | دیجی پین
                    </p>
                </Link>
            </div>
        </>
    )
}

export default Ads;