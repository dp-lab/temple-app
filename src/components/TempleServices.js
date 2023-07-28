// src/components/TempleServices.js

import React from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Here's a dummy list of services.
// In a real application, this would be fetched from an API.
const services = [
    { id: 1, name: "Service 1" },
    { id: 2, name: "Service 2" },
    // You can add more services here
];

const TempleServices = () => {
    const { id: templeId } = useParams();

    return (
        <ListGroup>
            {services.map((service) => (
                <ListGroup.Item key={service.id}>{service.name}</ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TempleServices;
