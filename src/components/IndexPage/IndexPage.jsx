import React from 'react';
import styles from './IndexPage.module.css';
import {Col, Container, Row} from "react-bootstrap";
import PersonMiniCard from "./PersonMiniCard";
import {getMassOfPersonsForIndexPage} from "../../forTesting/testtingJS"

const IndexPage = () => {
    const propps = getMassOfPersonsForIndexPage();
    console.log(propps);

    const body = propps.map((categories, index) => {
        //  реклама появляется через блок
        if (index % 2 !== 0) {
            return (
                <>
                    <Col md={9} sm={12}>
                        <Row>
                            <Col md={12}>
                                <span className={styles.categoryName}><h5>{categories.category}</h5></span>
                                <div className={styles.category}>
                                    {categories.members.map(persons => (
                                        <PersonMiniCard
                                            name={persons.name}
                                            surname={persons.surname}
                                            patronymic={persons.patronymic}
                                            rating={persons.rating}
                                            profession={persons.profession}
                                            avatar={persons.avatar}
                                        />))}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} sm={12}>
                        <Row style={{height: "100%"}}>
                            <Col></Col>
                        </Row>
                    </Col>
                </>
            )
        } else {
            return (<>
                    <Col md={9} sm={12}>
                        <Row>
                            <Col md={12}>
                                <span className={styles.categoryName}><h5>{categories.category}</h5></span>
                                <div className={styles.category}>
                                    {categories.members.map(persons => (
                                        <PersonMiniCard
                                            name={persons.name}
                                            surname={persons.surname}
                                            patronymic={persons.patronymic}
                                            rating={persons.rating}
                                            profession={persons.profession}
                                            avatar={persons.avatar}
                                        />))}
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={3} sm={12}>
                        <Row style={{height: "400px"}}>
                            <Col className={`${styles.border} ${styles.advertising}`}>
                                <h1>Тут</h1>
                                <h1>Может</h1>
                                <h1>Быть</h1>
                                <h1>Ваша</h1>
                                <h1>Реклама</h1>
                                <h1 style={{
                                    position: "absolute",
                                    bottom: "5px",
                                    right: "50%",
                                    marginRight: "-100px"
                                }}>VPROFI.RU</h1>
                            </Col>
                        </Row>
                    </Col>
                </>
            )
        }
    });


    return (<div className={styles.main_box}>
        <Container fluid={true}>
            <Row>
                {body}
            </Row>
        </Container>
    </div>)
};


export default IndexPage