import logoFull from './assets/full-horizontal.svg'

import Link from "next/link"
import Image from "next/image"

const IconHeader = () => {
    return (
        <>
            <Link href="/" className="w-50">
                <Image src={logoFull} alt="Logo" />
            </Link>
        </>
    )
};

export default IconHeader;