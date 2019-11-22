import React, {useState} from 'react';
import style from './TabsPanel.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {IoIosArrowForward} from "react-icons/io";

import {directions} from "../../forTesting/directions";
import {specialties} from "../../forTesting/specialties";
import {specializations} from "../../forTesting/specialization";

const TabsPanel = ({tabsPanelVisible}) => {

    const [currentTabsState, setCurrentTabsState] = useState({
        currentDirection: directions[0],
        currentSpecialty: specialties.filter(specialty => (specialty.direction_id === directions[0].id))
    });


    const directionHover = (id) => {
        setCurrentTabsState({
            currentDirection: directions.filter(direction => direction.id === id)[0],
            currentSpecialty: specialties.filter(specialty => specialty.direction_id === id)
        })
    };

    const getCurrentSpecializations = (specialtyId) => {
        return specializations.filter(specialization =>
            (specialization.direction_id === currentTabsState.currentDirection.id && specialization.specialty_id === specialtyId))
    };

    return (
        <div className={`${style.tabsPanel} ${tabsPanelVisible ? style.tabsPanelOpen : style.tabsPanelHidden}`}>

            <Container fluid={true} className={style.container}>
                <Row>

                    <Col md={5} lg={4} xl={3}>
                        <div className={style.categories}>
                            {
                                directions.map((direction, index) => (
                                        <div key={index}
                                             className={`${style.tab} ${(direction.id === currentTabsState.currentDirection.id) ? style.tabHover : ''}`}
                                             onMouseEnter={() => directionHover(direction.id)}>

                                            <a href='#'>{direction.name}</a>
                                            <IoIosArrowForward className={style.arrow}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </Col>

                    <Col md={7} lg={8} xl={9}>

                        <div className={style.currentDirectionName}>
                            <a href='#'>{currentTabsState.currentDirection.name}</a>
                        </div>

                        <div className={style.specialtySpecialization}>

                            {
                                currentTabsState.currentSpecialty.map((specialty, index) => (
                                    <div className={style.specialty} key={index}>

                                        <div className={style.specialtyName}>
                                            <a href="#">{specialty.name}</a>
                                        </div>

                                        <div>
                                            {
                                                getCurrentSpecializations(specialty.id)
                                                    .map((specialization, index) => <a href="#" key={index} className={style.specialization}>
                                                        {specialization.name}</a>)
                                            }
                                        </div>
                                    </div>))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default TabsPanel