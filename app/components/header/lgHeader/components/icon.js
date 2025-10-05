import logo from './assets/full-horizontal.svg'

import Link from "next/link"
import Image from "next/image"

const Icon = () => {
    return (
        <>
            <Link href="/" className="w-50">
                <Image src={logo} alt="Logo" />
            </Link>
        </>
    )
}

export default Icon;