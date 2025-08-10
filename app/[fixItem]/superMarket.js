import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const SuperMarket = () => {
    return (
        <>
            <div className="w-fit h-fit p-3 rounded-4xl bg-green-700 fixed bottom-10 left-5 flex items-center justify-center">
                <p className="text-white ml-2">سوپر مارکت</p>
                <ShoppingBasketIcon className="text-white" />
            </div>
        </>
    )
}

export default SuperMarket;