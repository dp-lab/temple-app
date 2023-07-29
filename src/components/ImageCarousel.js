import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = ({ temple, altText }) => {
    return (
        <Carousel>
            {temple.imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={url} alt={altText} />
                    <Carousel.Caption>
                        <h4>{temple.name}</h4>
                        <p>Deity: {temple.deity}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
