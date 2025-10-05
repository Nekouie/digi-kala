import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const SuperMarket = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div
                    className="w-fit h-fit p-3 rounded-4xl z-999  bg-green-700  fixed  bottom-5 lg:left-5 flex items-center justify-center">
                    <p className="text-white ml-2">سوپر مارکت</p>
                    <ShoppingBasketIcon className="text-white"/>
                </div>
            </div>
        </>
    )
}

export default SuperMarket;