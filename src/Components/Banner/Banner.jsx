import "./Banner.css"
import whiteSneakers from "/images/White-Sneakers-PNG-Clipart 1.png";

export default function Banner(){
    return(
        <>
            <section id="content">
                <div id="sale">
                    <div id="saleContent">
                        <span>Melhores ofertas personalizadas</span>
                        <h1>Queima de<br/>estoque Nike &#128293;</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Ipsam blanditiis vitae perferendis impedit.</p>
                        <button>Ver Ofertas</button>
                    </div>
                    <div id="saleImage"><img src={whiteSneakers} alt="white nike sneaker"/></div>
                    <div id="decor"></div>
                </div>
            </section>
        </>
    )
}