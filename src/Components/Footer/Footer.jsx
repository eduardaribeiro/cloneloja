import "./Footer.css";
import whiteLogo from "/images/whiteLogo.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="info">
          <div id="social">
            <div id="socialLogo">
              <img src={whiteLogo} alt="logo Digital Store" />
              <h1>Digital Store</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              ducimus, quo optio autem alias laborum sed deserunt mollitia saepe
              quaerat.
            </p>
            <div id="socialMedias">
              <i className="fa-brands fa-facebook-f" tabIndex={0}></i>
              <i className="fa-brands fa-instagram" tabIndex={0}></i>
              <i className="fa-brands fa-twitter" tabIndex={0}></i>
            </div>
          </div>
          <div id="about">
            <h3>Informação</h3>
            <a href="#">Sobre Drip Store</a>
            <br />
            <a href="#">Segurança</a>
            <br />
            <a href="#">Wishlist</a>
            <br />
            <a href="#">Blog</a>
            <br />
            <a href="#">Trabalhe Conosco</a>
            <br />
            <a href="#">Meus Pedidos</a>
          </div>
          <div id="categories">
            <h3>Categorias</h3>
            <a href="#">Camisetas</a>
            <br />
            <a href="#">Calças</a>
            <br />
            <a href="#">Bonés</a>
            <br />
            <a href="#">Headphones</a>
            <br />
            <a href="#">Tênis</a>
          </div>
          <div id="contact">
            <h3>Contato</h3>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <div id="copyrights">
          <p>&copy; 2024 Digital College</p>
        </div>
      </footer>
    </>
  );
}
