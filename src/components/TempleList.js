// src/components/TempleList.js

import React, { useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemples } from "../redux/actions/templeActions";
import { Oval } from "react-loader-spinner";

const TempleList = () => {
    const dispatch = useDispatch();
    const temples = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchTemples());
    }, [dispatch]);

    if (!temples.length) {
        return <Oval color="#00BFFF" height={100} width={100} />;
    }

    return (
        <Container>
            <Row>
                {temples.map((temple) => (
                    <Col sm={6} md={4} lg={3} key={temple.id}>
                        <Card className="mb-4">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/150"
                            />
                            <Card.Body>
                                <Card.Title>{temple.name}</Card.Title>
                                <Card.Link href={`/temple/${temple.id}`}>
                                    View Services
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TempleList;
