import IconHeader from "@/app/components/header/lgHeader/components/icon";
import Search from "@/app/components/header/lgHeader/components/search";
import UserItems from "@/app/components/header/lgHeader/components/userItems";
import Categories from "@/app/components/header/lgHeader/components/categories";
import ChooseCity from "@/app/components/header/lgHeader/components/chooseCity";

const LgHeader = () => {
    return (
        <>
            <div className={"lg:flex w-full max-w-400 hidden px-2 pt-4 text-nowrap" +
                " flex-col" +
                " justify-center" +
                " items-center"}>
                <div className="w-full flex h-10 items-center justify-between">
                        <div className="flex items-center max-w-3/4 justify-center">
                            <IconHeader/>
                            <Search/>
                        </div>
                        <UserItems/>
                </div>
                <div className="w-full hidden lg:flex items-center justify-between mt-3">
                    <Categories/>
                    <ChooseCity/>
                </div>
            </div>
        </>
    )
}

export default LgHeader;