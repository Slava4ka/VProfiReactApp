import React, {useState} from 'react';
import style from './TabsPanel.module.css';
import {Col, Container, Row} from "react-bootstrap";

import {IoIosArrowForward} from "react-icons/io";
import {TiArrowLeftThick} from "react-icons/ti";

import {directions} from "../../forTesting/directions";
import {specialties} from "../../forTesting/specialties";
import {specializations} from "../../forTesting/specialization";
import SpecialtySpecialization from "./SpecialtySpecialization";
import AllSpecializations from "./AllSpecializations";

const TabsPanel = ({tabsPanelVisible}) => {

    const [currentTabsState, setCurrentTabsState] = useState({
        currentDirection: directions[0],
        currentSpecialty: specialties.filter(specialty => (specialty.direction_id === directions[0].id))
    });


    // вот тут можно ебошить объекты

    /**
     * status: false/false, state: undefined/{id: 'id:Int', name:'name:String'}
     */
    const [showAllSpecializations, setShowAllSpecializations] = useState({status: false, state: undefined});

    const setSpecializationsView = (status = false, id, name) => {
        if (status === true) {
            setShowAllSpecializations({status: true, state: {id: id, name: name}})
        } else {
            setShowAllSpecializations({status: false, state: undefined})
        }
        console.log("setShowAllSpecializations " + setShowAllSpecializations);
    };

    const directionHover = (id) => {
        setCurrentTabsState({
            currentDirection: directions.filter(direction => direction.id === id)[0],
            currentSpecialty: specialties.filter(specialty => specialty.direction_id === id)
        });
        setSpecializationsView();
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
                                             onMouseEnter={() => (directionHover(direction.id))}>

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
                            {
                                (showAllSpecializations.status === true) ?
                                    <span className={style.styleBoxForSpecializationsView}>
                                        <TiArrowLeftThick className={style.arrowBack}
                                                          onClick={() => setSpecializationsView()}/>
                                        <a href='#'>{currentTabsState.currentDirection.name} / {showAllSpecializations.state.name}</a>
                                    </span> :

                                    <span>
                                        <a href='#'>{currentTabsState.currentDirection.name}</a>
                                    </span>
                            }
                        </div>

                        <div className={style.specialtySpecialization}>
                            {
                                (showAllSpecializations.status === true) ?
                                    <AllSpecializations
                                        showAllSpecializations={showAllSpecializations}
                                        getCurrentSpecializations={getCurrentSpecializations}
                                    /> :
                                    <SpecialtySpecialization currentTabsState={currentTabsState}
                                                             getCurrentSpecializations={getCurrentSpecializations}
                                                             setSpecializationsView={setSpecializationsView}
                                    />
                            }
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default TabsPanel