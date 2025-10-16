import Link from "next/link";

const Ads = () => {
    return (
        <>
            <div className="bg-green-900 to-green-950 text-lg lg:fixed hidden z-999 bg-gradient-to-r w-full lg:h-12 lg:flex  justify-center items-center text-white">
                <Link href="./">دیجی پین</Link>
            </div>
        </>
    )
}

export default Ads;