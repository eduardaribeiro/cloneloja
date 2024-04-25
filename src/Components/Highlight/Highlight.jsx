import "./Highlight.css";
import supreme from "/images/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png";
import adidas from "/images/adidas.png"
import beats from "/images/beats.png";
import shirt from "/images/shirt.png";
import pants from "/images/pants.png";
import headphone from "/images/headphone.png";
import shoe from "/images/shoes.png"

export default function Highlight(){
    return(
        <>
            <div id="collections">
                <h3>Coleções em destaque</h3>
                <div id="collectionsContent">
                    <div className="collection">
                        <div className="collectionContent">
                            <span>30% off</span>
                            <p>Novo drop<br/>Supreme</p>
                            <button>Comprar</button>
                        </div>
                        <div className="collectionImg"><img src={supreme} alt="tshirt supreme"/></div>
                    </div>
                    <div className="collection">
                        <div className="collectionContent">
                            <span>30% off</span>
                            <p>Coleção <br/>Adidas</p>
                            <button>Comprar</button>
                        </div>
                        <div className="collectionImg"><img src={adidas} alt="adidas shoe"/></div>
                    </div>
                    <div className="collection">
                        <div className="collectionContent">
                            <span>30% off</span>
                            <p>Novo <br/>Beats Bass</p>
                            <button>Comprar</button>
                        </div>
                        <div className="collectionImg"><img src={beats} alt="headphone beats"/></div>
                    </div>
                </div>    
            </div>
            <div id="highlights">
                <h3>Coleções em Destaque</h3>
                <div id="highlightsContent">
                    <div className="department" tabIndex={0}><img src={shirt} alt="tshirt"/><h4>camisetas</h4></div>
                    <div className="department" tabIndex={0}><img src={pants} alt="pants"/><h4>calças</h4></div>
                    <div className="department" tabIndex={0}><img src={pants} alt="suppose to be a hat"/><h4>bonés</h4></div>
                    <div className="department" tabIndex={0}><img src={headphone} alt="headphone"/><h4>headphones</h4></div>
                    <div className="department" tabIndex={0}><img src={shoe} alt="shoe"/><h4>tênis</h4></div>
                </div>
            </div>
        </>
    )
}