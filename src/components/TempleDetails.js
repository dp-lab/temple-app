import React from "react";
import { Image, ListGroup, Card } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs"; // Importing an icon
import "./TempleDetails.css"; // Importing the CSS file

const TempleDetails = ({ temple }) => {
    return (
        <Card className="bg-dark text-white temple-details">
            <Card.Img
                src={temple.imageUrl}
                alt={temple.name}
                className="temple-details-img"
            />
            <Card.ImgOverlay>
                <h4>
                    <BsFillBrightnessHighFill /> {temple.name}
                </h4>
                <ListGroup variant="flush">
                    <ListGroup.Item className="temple-details-item bg-transparent">
                        <strong>Deity:</strong> {temple.deity}
                    </ListGroup.Item>
                    <ListGroup.Item className="temple-details-item bg-transparent">
                        <strong>Address:</strong> {temple.address}
                    </ListGroup.Item>
                    {/* Add more details here as needed */}
                </ListGroup>
            </Card.ImgOverlay>
        </Card>
    );
};

export default TempleDetails;
