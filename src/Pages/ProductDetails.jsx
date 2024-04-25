import ProductDetailsCardList from "../Components/CardLists/ProductDetailsCardList";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ProductDetailsContent from "../Components/ProductDetailsContent/ProductDetailsContent";

export default function ProductDetails(){
    return(
        <>
            <Header/>
            <ProductDetailsContent/>
            <ProductDetailsCardList/>
            <Footer/>
        </>
    )
}