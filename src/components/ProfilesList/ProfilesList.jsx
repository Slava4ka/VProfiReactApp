import React, {useState} from 'react';
import style from './ProfilesList.module.css';
import styles from './ProfilesList.module.scss'

import {IoIosArrowRoundForward} from "react-icons/io";
import {FiChevronsDown, FiChevronsUp} from "react-icons/fi";
import {Col, Container, Row} from "react-bootstrap";
import ProfileItem from "./ProfileItem";
import OptionFilter from "./OptionFilter";
import ParamsFilter from "./inFuture/ParamsFilter";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";

const ProfilesList = () => {

    const [temp, setTemp] = useState(false);

    const [optionTypeFilter, setOptionTypeFilter] = useState({
        Date: true,
        Rating: false,
        Experience: false,
        Cost: false
    });

    // тут я использую замыкание для предотвращения дублирования кода обработки выбора фильтра. В колбеке предедается
    // объект с состояниями и функция, которая его меняет (useState), а в компоненте в функцию передается текущий фильтр
    // надо подумать
    const changeFilter = (typeFilter, setFilterFunction) => {

        return (activeFilter) => {
            let currentFilerState = typeFilter;
            for (let filter in currentFilerState) {
                if (currentFilerState.hasOwnProperty(filter)) {
                    (activeFilter.toString() === filter.toString()) ? currentFilerState[filter] = true : currentFilerState[filter] = false
                }
            }
            setFilterFunction(JSON.parse(JSON.stringify(currentFilerState)));
        }
    };

    setTimeout(setTemp, 1000, true);

    return (
        <Container>
            <Row>
                <Col>
                    <div className={styles.profilesMainBlock}>

                        <div className={styles.headers}>

                            <Breadcrumbs crumbs={[{name: "Медицина", link: "www"}, {name: "Врачи", link: "www"}]} goToCategory={(a)=>console.log(a)}/>

                        </div>

                        <div className={styles.sorts}>

                            <OptionFilter optionTypeFilter={optionTypeFilter}
                                          changeOptionFilter={changeFilter(optionTypeFilter, setOptionTypeFilter)}/>

                        </div>

                        <div className={style.profilesList}>
                            <ProfileItem isLoaded={temp}/>
                            <ProfileItem isLoaded={temp}/>
                            <ProfileItem isLoaded={temp}/>
                            <ProfileItem isLoaded={temp}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};
export default ProfilesList

