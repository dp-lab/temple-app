import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
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
                <p>
                    <strong>Deity:</strong> {temple.deity}
                </p>
            </Card.ImgOverlay>
            <ListGroup variant="flush" className="temple-details-list">
                <ListGroup.Item className="temple-details-item">
                    <strong>Address:</strong> {temple.address}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Established:</strong> {temple.established}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Timings:</strong> {temple.timings}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Festivals:</strong> {temple.festivals.join(", ")}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Special Rituals:</strong> {temple.specialRituals}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Architecture:</strong> {temple.architecture}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Dress Code:</strong> {temple.dressCode}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Facilities:</strong> {temple.facilities.join(", ")}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Nearby Attractions:</strong>{" "}
                    {temple.nearbyAttractions.join(", ")}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default TempleDetails;
