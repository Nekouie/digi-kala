import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import MainPage from "@/app/(pages)/page";
import FixedItem from "@/app/components/fixed/fixedItem";

const Home = () => {
    return (
        <>
            <Header/>
            <MainPage/>
            <FixedItem/>
            <Footer/>
        </>
    )
}

export default Home