// src/components/Footer.js

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <p className="text-center my-3">
                    &copy; {new Date().getFullYear()} Temple Marketplace
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
