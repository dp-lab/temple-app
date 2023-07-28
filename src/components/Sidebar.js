// src/components/Sidebar.js

import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Category 1</Nav.Link>
            <Nav.Link eventKey="link-1">Category 2</Nav.Link>
            <Nav.Link eventKey="link-2">Category 3</Nav.Link>
            <Nav.Link eventKey="link-3">Category 4</Nav.Link>
        </Nav>
    );
};

export default Sidebar;
