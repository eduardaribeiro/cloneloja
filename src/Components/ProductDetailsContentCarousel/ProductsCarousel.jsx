import "./ProductsCarousel.css";
import carousel1 from "/images/Group 53614.png";
import carousel2 from "/images/Group 53615.png";
import carousel3 from "/images/Group 53616.png";
import carousel4 from "/images/Group 53617.png";
import carousel5 from "/images/Group 53618.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductsCarousel(){
    const images = [
        {original: carousel1},
        {original: carousel2},
        {original: carousel3},
        {original: carousel4},
        {original: carousel5}
    ];

    return(
        <>
            <div id="carouselContainer">
                <ImageGallery items={images} />
            </div>
        </>
    )
}