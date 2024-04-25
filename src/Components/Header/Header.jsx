import "./Header.css";
import Vector from "/images/Vector.png";

import {Link} from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="mainHeader">
        <div id="utils">
          <div id="logo" tabIndex={0}>
            <img src={Vector} alt="Logo Digital Store" />
            <span>Digital Store</span>
          </div>
          <div id="search">
            <input type="search" placeholder="    Procurar Produto..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div id="signup">
            <a href="">Cadastre-se</a>
            <Link className="link" to ="/login" >Entrar</Link>
          </div>
          <div id="cart">
            <i className="fa-solid fa-cart-shopping" tabIndex={0}></i>
          </div>
        </div>
        <navbar id="navbar">
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Categorias</a>
          <a href="#">Meus Pedidos</a>
        </navbar>
      </header>
    </>
  );
}
