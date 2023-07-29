import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "./TempleDetails.css";
import ImageCarousel from "./ImageCarousel"; // Assuming you put the ImageCarousel component in a separate file.

const TempleDetails = ({ temple }) => {
    return (
        <Card className="bg-dark text-white temple-details d-flex flex-row">
            <div style={{ maxWidth: "40%", width: "40%" }}>
                {/* Use ImageCarousel instead of Card.Img */}
                <ImageCarousel
                    imageUrls={temple.imageUrls}
                    altText={temple.name}
                />
                {/* Removed Card.ImgOverlay */}
                <h4>
                    <BsFillBrightnessHighFill /> {temple.name}
                </h4>
                <p>
                    <strong>Deity:</strong> {temple.deity}
                </p>
            </div>
            <div style={{ flexGrow: "2" }}>
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
                        <strong>Festivals:</strong>{" "}
                        {temple.festivals.join(", ")}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Special Rituals:</strong>{" "}
                        {temple.specialRituals}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Architecture:</strong> {temple.architecture}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Dress Code:</strong> {temple.dressCode}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Facilities:</strong>{" "}
                        {temple.facilities.join(", ")}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Nearby Attractions:</strong>{" "}
                        {temple.nearbyAttractions.join(", ")}
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Card>
    );
};

export default TempleDetails;
