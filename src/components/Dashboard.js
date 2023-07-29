// src/components/Dashboard.js

import React from "react";
import {
    Container,
    Navbar,
    Form,
    FormControl,
    Button,
    Nav,
} from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TempleList from "./TempleList";

function Dashboard() {
    
    const handleSearch = (event) => {
        event.preventDefault();
        // Handle search functionality here
    };

    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#">Temple Marketplace</Navbar.Brand>
                <Form inline className="mx-auto" onSubmit={handleSearch}>
                    <FormControl
                        type="text"
                        placeholder="Search Temple"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success" type="submit" >
                        Search
                    </Button>
                </Form>
                <Nav>
                    <Nav.Link href="#">Profile</Nav.Link>
                    <Nav.Link href="#">Logout</Nav.Link>
                </Nav>
            </Navbar>

            <Sidebar>
                <h3>Categories</h3>
                {/* Add categories here */}
            </Sidebar>

            <Container>
                <TempleList />
            </Container>

            <Footer>
                <p>&copy; {new Date().getFullYear()} Temple Marketplace</p>
            </Footer>
        </>
    );
}

export default Dashboard;
