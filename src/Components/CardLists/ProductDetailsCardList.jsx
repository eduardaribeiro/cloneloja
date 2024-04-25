import "./CardList.css";
import Card from "./Card";

export default function ProductDetailsCardList(){
    let productDetailsCardListArray = [];
    for(var index=0; index<4; index++){
        productDetailsCardListArray.push(<Card key={index} /> )
    }

    return(
        <>
            <div id="trending">
                <div><h3>Produtos em alta</h3><a href="#">Ver todos <i class="fa-solid fa-arrow-right"></i></a></div>
                <div id="trendingContent">{productDetailsCardListArray}</div>
            </div>
        </>
    )
}