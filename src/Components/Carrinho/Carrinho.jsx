import "./Carrinho.css";
import BgBlue from "../../assets/BgBlue.png";
import Card from "../CardLists/Card";
import Footer from "../Footer/Footer";
import ImagemArrow from "../../assets/arrow.png";
import {useState} from "react"

export default function Carrinho() {

  const [count, useCount] = useState(0)
  function Acrescimo (){
    useCount(count+1);
  }
  function Descrecimo (){
    useCount (count-1);
  }
  

  return (
    <>
      <div className="pai">
        <div className="body2">
          <div className="ths">
            <div className="meuCarinho">
              <span>MEU CARRINHO</span>
            </div>
            <div className="ps">
              <p>QUANTIDADE</p>
              <p>UNITÁRIO</p>
              <p>TOTAL</p>
            </div>
          </div>

          <div className="productsUnit">
            <div className="meuCarrinhoProductDesc">
              <img src={BgBlue} alt="" />
              <div className="desc">
                <h4>Tenis nike revolution 6 Next nature Masculino</h4>
                <p>
                  Cor :<span>Vermelho/Branco</span>{" "}
                </p>
                <p>
                  Tamanho :<span>42</span>{" "}
                </p>
              </div>
            </div>
            <div className="calculations">
              <div className="calcButtons">

              <p>{count}</p>
          <button onClick ={Acrescimo}>+</button>
          <button onClick ={Descrecimo}>-</button>
          

                
              </div>
              <div className="removeItem">
                <a href="">Remover Item</a>
              </div>
            </div>

            <div className="prices-carinho">
              <div className="unit-div">
                <span>R$ 219,00</span>
                <p>R$ 219,00</p>
              </div>
              <div className="unit-div">
                <span>R$ 219,00</span>
                <p>R$ 219,00</p>
              </div>
            </div>
          </div>
          <div className="cupom">
            <div className="cupom_a">
              <p>Cupom de desconto</p>
              <p>Calcular frete</p>
            </div>
            <div className="cupom_b">
              <input type="text" placeholder="insira seu código" />
              <button>OK</button>
              <input type="text" placeholder="insira seu CEP" />
              <button>OK</button>
            </div>
          </div>
        </div>
        <div className="resumo">
          <h1>RESUMO</h1>

          <div className="compras">
            <div className="compras_divisao">
              <div className="compras_a">
                <p>Subtotal</p>
                <p>Frete</p>
                <p>Desconto</p>
                <p className="total">
                  <strong>Total</strong>
                </p>
              </div>
              <div className="compras_b">
                <p>R$ 219,00</p>
                <p>R$ 0,00</p>
                <p>R$ 30,00</p>
                <p>
                  <span>R$ 219,00</span>
                </p>
              </div>
            </div>
            <p className="parcelamento">ou 10x de R$ 21,00 sem juros</p>
            <button>Continuar</button>
          </div>
        </div>
      </div>
      <div className="meio">
        <p className="subtitle">Produtos relacionados</p>
        <a href="#">ver todos</a>
        <img src={ImagemArrow} alt="arrow" />
      </div>
      <div className="cards">
        <Card data={{ name:"teste", material: "teste", price:100}}/>
        <Card data={{ name:"teste", material: "teste", price:150}}/>
        <Card data={{ name:"teste", material: "teste", price:200}}/>
        <Card data={{ name:"teste", material: "teste", price:250}}/>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
