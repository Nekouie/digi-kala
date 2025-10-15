"use client"
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import MainPage from "@/app/(main-content)/page";
import FixedItem from "@/app/components/fixed/fixedItem";
import {Provider} from "react-redux";

import {store} from "./redux/store"

const Home = () => {
    return (
        <>
            <Provider store={store}>
                <Header/>
                <MainPage/>
                <FixedItem/>
                <Footer/>
            </Provider>

        </>
    )
}

export default Home