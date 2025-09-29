import {Typography} from "@mui/material";
import Link from "next/link"
const Icon = () => {
    return (
        <>
            <Link href="/" className="w-fit flex ml-5 relative items-baseline justify-baseline text-white wrap-anywhere">
                <span className="text-red-600 scale-x-650 scale-y-450 ml-10 ms-5  font-[1000] -rotate-90">)</span>
                <Typography variant="p" className="text-red-600 text-4xl text-nowrap">دیجی کالا</Typography>
            </Link>
        </>
    )
}

export default Icon;