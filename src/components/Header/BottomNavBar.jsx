import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import style from "./Header.module.css";
import SimpleSlider from "../../forTesting/Slick/SimpleSlider";

const BottomNavBar = ({openCloseTabs}) => {
    return (
        <div className={`${style.bottomNavBar}`}>
            <Container fluid={true} className={style.container}>
                <Row>
                    <Col sm={12} md={2}>
                        <div className={style.allCategories} onClick={() => openCloseTabs()}>
                            <h5 className={style.label}>Все категории</h5>
                        </div>
                    </Col>
                     <Col sm={12} md={10}>
                        <SimpleSlider/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default BottomNavBar;