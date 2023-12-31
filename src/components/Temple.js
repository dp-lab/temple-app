import React from "react";
import { Card } from "react-bootstrap";

const Temple = ({ temple, onShowDetails }) => {
    return (
        <Card className="mb-3" onClick={() => onShowDetails(temple)}>
            <Card.Img
                variant="top"
                src={temple.imageUrl || "https://via.placeholder.com/300"}
            />
            <Card.Body>
                <Card.Title>{temple.name}</Card.Title>
                <Card.Text>{temple.address}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Temple;
