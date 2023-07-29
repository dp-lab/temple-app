// src/components/TempleServices.js

import React from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Here's a dummy list of services.
// In a real application, this would be fetched from an API.
const services = [
    { id: 1, name: "Service 1" },
    { id: 2, name: "Service 2" },
    { id: 3, name: "Ratings and Review" },
    // You can add more services here
];

const TempleServices = () => {
    const { id: templeId } = useParams();

    return (
        <div>
            <h2>Temple Services</h2>
            <ListGroup>
                {services.map((service) => (
                    <ListGroup.Item key={service.id}>
                        <Link to={service.id === 3 ? "/rate-and-review" : `/temple/${service.id}`}>
                            {service.name}
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TempleServices;
