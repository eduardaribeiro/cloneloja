import "./Special.css"
import airJordan from "/images/airJordan.png"

export default function Special(){
    return(
        <>
            <section id="special">
                <div id="specialImage"><img src={airJordan} alt="Air Jordan"/></div>
                <div id="specialContent">
                    <span>Oferta Especial</span>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quas magnam in aliquid recusandae voluptatibus accusantium! Earum dolor perferendis, officia et optio labore! Quis suscipit necessitatibus dolorem perferendis, commodi accusamus tempora voluptates cupiditate ducimus itaque?</p>
                    <button>Ver Oferta</button>
                </div>
            </section>
        </>
    )
}