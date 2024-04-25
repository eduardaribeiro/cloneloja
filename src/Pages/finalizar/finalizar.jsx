import "./finalizar.css"

export default function Finalizar() {

    return (
      <>

    <Header></Header>

      <h1>Finalizar compra</h1>

<div className="blocoFinalizar">

        <div className="primeiroBloco">
        
        <p>Informações pessoais</p>

        <li></li>
        <p>Nome Completo*</p>
        <input type="Nome" placeholder="    Insira seu nome" />

        <p>CPF*</p>
        <input type="search" placeholder="    Insira seu CPF" />

        <p>Email*</p>
        <input type="search" placeholder="    Insira seu email" />
        
        <p>celular*</p>
        <input type="search" placeholder="    Insira seu celular" />


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








      </>
    )
}

