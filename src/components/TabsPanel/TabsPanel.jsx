import React from 'react';
import style from './TabsPanel.module.css';
import {Col, Container, Row} from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const TabsPanel = ({tabsPanelVisible}) => {

    const TEMP_CATEGORIES = ["Репетиторы и курсы", "Мастера по ремонту", "Мастера красоты", "Спортивные тренеры", "Автоинструкторы",
        "Артисты", "ИТ-фрилансеры", "Домашний персонал", "Ветеринары", "Бухгалтеры и юристы", "Врачи", "Ищете кого-то ещё?"];

    return (
        <div className={`${style.tabsPanel} ${tabsPanelVisible ? style.tabsPanelOpen : style.tabsPanelHidden}`}>

            <Container>
                <Row>

                    <Col md={4}>
                        <div className={style.categories}>
                            {
                                TEMP_CATEGORIES.map((category, index) => (
                                        <div key={index} className={style.tab}>
                                            <a className={style.linkTab}>{category}</a>
                                            <IoIosArrowForward className={style.arrow}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </Col>

                    <Col md={8}>
                        <div className={style.specialtySpecialization}>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default TabsPanel