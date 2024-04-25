import "./CardList.css";
import Card from "./Card";

import { useState, useEffect } from "react";

export default function HomeCardList(){
    // let homeCardListArray = [];
    // for(var index=0; index<8; index++){
    //     homeCardListArray.push(<Card key={index} /> )
    // }
    const [apiData,setApiData] = useState ([])

    useEffect( () => {
        fetch ("https://662a91a367df268010a464ff.mockapi.io/api/produtos")
        .then (response => response.json())
        .then (data => setApiData (data))
        .catch (error => console.log(error))
        
    },[]);

    
    

    return(
        <>
            <div id="trending">
                <div><h3>Produtos em alta</h3><a href="#">Ver todos <i class="fa-solid fa-arrow-right"></i></a></div>
                <div id="trendingContent">
                  {
                     apiData.map( (item,index) =>(
                     <Card key={index} data={item} />

                     ))

                  }



                </div>
            </div>
        </>
    )
}