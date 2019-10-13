import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import style from "./Header.module.css";
import SimpleSlider from "../../forTesting/Slick/SlickForTesting";

const BottomNavbar = () => {
    return (
        <div className={`${style.bottomNavBar}`}>
            <Container fluid={true} className={style.container}>
                <Row>
                    <Col sm={12} md={2}>
                        <h5>Все категории</h5>
                    </Col>
                    <Col sm={12} md={10}>
                        <SimpleSlider />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default BottomNavbar;