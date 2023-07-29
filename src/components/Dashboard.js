import React, { useEffect, useState } from "react";
import {
    Navbar,
    Container,
    Row,
    Col,
    Image,
    Modal,
    Button,
} from "react-bootstrap";
import Search from "./Search";
import Temple from "./Temple";
import TempleDetails from "./TempleDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemples } from "../redux/actions/templeActions";

import "./Dashboard.css"; // Assuming you have a Dashboard.css file for the Dashboard component

const Dashboard = () => {
    const dispatch = useDispatch();
    const temples = useSelector((state) => state || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [templeDetails, setTempleDetails] = useState(null);

    useEffect(() => {
        dispatch(fetchTemples());
    }, [dispatch]);

    const filteredTemples = temples.filter((temple) =>
        temple.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const showTempleDetails = (temple) => {
        setTempleDetails(temple);
    };

    const hideTempleDetails = () => {
        setTempleDetails(null);
    };

    return (
        <>
            <Navbar bg="light" className="px-3">
                <Navbar.Brand href="#home">
                    <Image
                        src="https://via.placeholder.com/200x200"
                        alt="Logo"
                        height="30"
                        width="30"
                        style={{ marginRight: "10px" }}
                    />
                    Temple Dashboard
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Search onSearch={setSearchTerm} />
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    {filteredTemples.map((temple) => (
                        <Col md={3} className="g-4" key={temple.id}>
                            <Temple
                                temple={temple}
                                onShowDetails={showTempleDetails}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal
                show={!!templeDetails}
                onHide={hideTempleDetails}
                size="lg" // large size
                dialogAs={({ className, children, ...props }) => (
                    <Modal.Dialog
                        {...props}
                        className={className}
                        style={{
                            width: "80%" /* or whatever you want */,
                            maxWidth:
                                "none" /* necessary to not limit width by Bootstrap */,
                        }}
                    >
                        {children}
                    </Modal.Dialog>
                )}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Temple Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {templeDetails && <TempleDetails temple={templeDetails} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideTempleDetails}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Dashboard;
