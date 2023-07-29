import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = ({ imageUrls, altText }) => {
    return (
        <Carousel>
            {imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={url} alt={altText} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
