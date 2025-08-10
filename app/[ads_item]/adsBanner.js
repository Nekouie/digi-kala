import banner from "./assets/3.webp"
import Image from "next/image"

const AdsBanner = () => {
    return (
        <>
            <div className="w-full ">
                <Image className="h-100 object-cover" src={banner} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet blanditiis consequuntur, doloremque fugit iure minus natus nisi placeat quibusdam tempora velit voluptate? Amet consequatur culpa earum excepturi illum ipsa modi nisi quia, recusandae sed tempore veniam? Accusamus aliquam amet at cumque debitis dolorum et, facilis fugiat harum id impedit optio placeat praesentium quasi qui quis tempora, ut, voluptatum? A ab aliquam aliquid aperiam aut autem debitis dicta dolore dolorem doloremque, doloribus esse eveniet excepturi expedita facere facilis fugiat id laborum modi mollitia nam nesciunt nobis officiis optio, quas qui quisquam quod reprehenderit repudiandae rerum sint ullam unde voluptatum?</p>
            </div>
        </>
    )
}

export default AdsBanner;