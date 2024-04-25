import "./Card.css";
import {useState} from "react"
import kSwiss from "/images/kSwiss.png";

export default function Card({data}) {

const [count, useCount] = useState(0)
function Acrescimo (){
  useCount(count+1);
}
function Descrecimo (){
  useCount (count-1);
}

  return (
    <>
      <div className="trendingProduct" tabIndex={0}>
        <div className="productImage">
          <span>30% off</span>
          <img src={kSwiss} alt="sneaker kswiss" />
        </div>


        <b>{data.name}</b>
        <h4>{data.material}</h4>
        <p>
          <span>${data.price}</span> ${data.price}
        </p>

        <div>
          <p>{count}</p>
          <button onClick ={Acrescimo}>+</button>
          <button onClick ={Descrecimo}>-</button>
        </div>
      </div>
    </>
  );
}
