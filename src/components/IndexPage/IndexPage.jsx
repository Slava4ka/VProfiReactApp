import React from 'react';
import styles from './IndexPage.module.css';
import {Col, Container, Row} from "react-bootstrap";
import PersonMiniCard from "./PersonMiniCard";
import {getMassOfPersonsForIndexPage} from "../../forTesting/testtingJS"

const IndexPage = () => {
    const propps = getMassOfPersonsForIndexPage();
    console.log(propps);

    return (<div className={styles.main_box}>
        <Container fluid={true}>
            <Row>
                <Col lg={9} md={12} className={styles.border}>


                    {
                        propps.map(categores => (<>
                                <span>{categores.category}</span>
                                <div className={styles.category}>
                                    {categores.members.map(persons => (
                                        <PersonMiniCard
                                            name={persons.name}
                                            surname={persons.surname}
                                            patronymic={persons.patronymic}
                                            rating={persons.rating}
                                            profession={persons.profession}
                                            avatar={persons.avatar}
                                        />))}
                                </div>
                            </>
                        ))
                    }

                    {/*
                        <span>{propps[0].category}</span>
                        < div className={styles.category}>
                    {propps[0].members.map(persons => (
                        <PersonMiniCard
                        name={persons.name}
                        surname={persons.surname}
                        patronymic={persons.patronymic}
                        rating={persons.rating}
                        profession={persons.profession}
                        avatar={persons.avatar}
                        />))}
                        </div>
                       */}
                </Col>

                <Col lg={3} md={12} className={`${styles.border} ${styles.advertising}`}>
                    <img src="advertisingTemplate_309x242.PNG" alt="advertisingTemplate_309x242"/>
                </Col>
            </Row>
        </Container>
    </div>)
};
export default IndexPage