import { Swiper, SwiperSlide } from "swiper/react";
import BgBlue from "../../assets/BgBlue.png";
import Stars from "../../assets/Stars.png";
import Frame from "../../assets/Frame.png";
import ImagemArrow from "../../assets/arrow.png";
// Import Swiper styles
import "swiper/css";

import "./HeroProduct.css";

export default function HeroProduct() {
  return (
    <>
      <div className="father">
        <div className="slider">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img src={BgBlue} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BgBlue} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BgBlue} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BgBlue} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="imagesSneakers">
            <div>
              <img src={BgBlue} alt="" />
            </div>
            <div>
              <img src={BgBlue} alt="" />
            </div>
            <div>
              <img src={BgBlue} alt="" />
            </div>
            <div>
              <img src={BgBlue} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <h2>
            Tenis nike revolution 6 <br /> next nature masculino
          </h2>
          <p>Casual | Nike | REF:3432425</p>
          <div className="ratings">
            <img src={Stars} alt="" />
            <img src={Frame} alt="" />
            <p>(90 avaliações)</p>
          </div>
          <div className="price">
            <p>R$</p>
            <strong>219,00</strong>
            <p className="line">219</p>
          </div>
          <div>
            <p className="firsTitle">Descrição Produto</p>
            <p className="secondTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              odio, optio illo aspernatur aut, quas iste tempore in, esse autem
              itaque at vitae quae officiis iusto voluptatem beatae vero
              architecto?
            </p>
          </div>
          <p className="tamanho">Tamanho</p>

          <div className="father2">
            <div className="sizes">
              <strong>39</strong>
            </div>
            <div className="sizes">
              <strong>40</strong>
            </div>
            <div className="sizes">
              <strong>41</strong>
            </div>
            <div className="sizes">
              <strong>42</strong>
            </div>
            <div className="sizes">
              <strong>43</strong>
            </div>
          </div>
          <div className="father3">
            <div className="color1"> </div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
          </div>
          <button id="buy">Comprar</button>
        </div>
      </div>
      <div className="meio_a">
        <p className="subtitle">Produtos relacionados</p>
        <div>
          <a href="#">ver todos</a>
          <img src={ImagemArrow} alt="arrow" />
        </div>
      </div>
    </>
  );
}
