import "./LoginHeader.css";
import Vector from "/images/Vector.png";

export default function LoginHeader(){
    return(
        <>
            <header id="loginHeader">
                <div id="loginLogo">
                    <img src={Vector} />
                    <span>Digital College</span>
                </div>
            </header>
        </>
    )
}