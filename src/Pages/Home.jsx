import Banner from "../Components/Banner/Banner";
import HomeCardList from "../Components/CardLists/HomeTrendingCardList";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Highlight from "../Components/Highlight/Highlight";
import Special from "../Components/Special/Special";

export default function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <Highlight/>
            <HomeCardList/>
            <Special/>
            <Footer/>
        </>
    )
}