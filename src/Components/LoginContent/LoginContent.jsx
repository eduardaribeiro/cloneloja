import "./LoginContent.css"
import shoe1 from "/images/pexels-melvin-buezo-2529148 1.png";
import shoe2 from "/images/pexels-melvin-buezo-2529148 2.png";

export default function LoginContent(){
    return(
        <>
            <section id="loginContent">
                <div id="loginForm">
                    <h1>Acesse sua conta</h1>
                    <h4>Novo cliente? Então registre-se <a href="#">aqui</a>.</h4>
                    <label htmlFor="login">Login*</label>
                    <input type="text" name="login" placeholder="    Insira seu login ou email" />
                    <label htmlFor="password">Senha*</label>
                    <input type="password" name="password" placeholder="   Insira sua senha" />
                    <a href="#">Esqueci minha senha</a>
                    <button>Acessar Conta</button>
                    <div id="alternative">
                        <span>Ou faça login com </span><i class="fa-brands fa-google" tabindex={0}></i><i class="fa-brands fa-facebook" tabindex={0}></i>
                    </div>
                </div>
                <div id="imgLoginContent">
                    <img src={shoe1} id="shoe1"/>
                    <img src={shoe2} id="shoe2"/>
                </div>
            </section>
        </>
    )
}