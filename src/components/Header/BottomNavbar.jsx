import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import style from "./Header.module.css";

const BottomNavbar = () => {
    return (
        <Navbar className={`${style.bottomNavBar}`}>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

        </Navbar>
    )
};
export default BottomNavbar;