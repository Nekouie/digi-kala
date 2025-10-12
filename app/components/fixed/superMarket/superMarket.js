import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const SuperMarket = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div
                    className="lg:hidden w-fit h-fit p-3 rounded-4xl z-999  bg-green-700  fixed  bottom-12 flex items-center justify-center">
                    <ShoppingBasketIcon className="text-white"/>
                    <span className="text-white mx-2">|</span>
                    <p className="text-white ml-2">سوپر مارکت، تنوع بالا، پرتخفیف</p>
                </div>
                <div
                    className="hidden w-fit h-fit p-3 rounded-4xl z-999  bg-green-700  fixed bottom-12  left-12 lg:flex items-center justify-center">
                    <p className="text-white ml-2 font-bold">سوپر مارکت  تنوع بالا، پرتخفیف</p>
                    <ShoppingBasketIcon className="text-white"/>
                </div>
            </div>
        </>
    )
}

export default SuperMarket;