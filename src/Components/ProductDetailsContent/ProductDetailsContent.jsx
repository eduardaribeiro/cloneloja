import "./ProductDetailsContent.css";
import Stars from "/images/Stars.png";
import Score from "/images/Frame 9.png";
import ProductsCarousel from "../ProductDetailsContentCarousel/ProductsCarousel";

export default function ProductDetailsContent() {
  return (
    <>
      <div id="productDetailsContainer">
        <p>
          <b>
            <a href="#">Home</a>
          </b>{" "}
          / <a href="#">Produtos</a> / <a href="#">Tênis</a> /{" "}
          <a href="#">Nike</a> / Tênis Nike Revolution 6 Next Nature Masculino
        </p>
        <div id="productDetailsContainerContent">
          <div id="productCarousel">
            <ProductsCarousel />
          </div>
          <div id="productDescription">
            <h1>
              Tênis Nike Revolution
              <br />6 Next Nature Masculino
            </h1>
            <span>Casual | Nike | REF: 765876586</span>
            <br />
            <div id="evaluation">
              <img src={Stars} alt="quatro estrelas" />
              <img src={Score} alt="4.7 estrelas" />
              <span> (90 avaliações) </span>
            </div>
            <b id="priceTag">
              R$ <span>219</span>,00 <i>R$ 299,00</i>
            </b>
            <h4>Descrição do Produto</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              quibusdam soluta minus, voluptatem porro tempora doloribus
              necessitatibus ad, expedita, ut molestiae minima.{" "}
            </p>
            <div id="sizeSelection">
              <h4>Tamanho</h4>
              <input type="checkbox" name="" id="" value={"size"} />
              <input type="checkbox" name="" id="" value={"size"} />
              <input type="checkbox" name="" id="" value={"size"} />
              <input type="checkbox" name="" id="" value={"size"} />
              <input type="checkbox" name="" id="" value={"size"} />
            </div>
            <div id="colorSelection">
              <h4>Cor</h4>
              <input type="radio" name="colorSelector" id="" />
              <input type="radio" name="colorSelector" id="" />
              <input type="radio" name="colorSelector" id="" />
              <input type="radio" name="colorSelector" id="" />
            </div>
            <button>comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
