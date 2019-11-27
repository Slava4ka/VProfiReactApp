import React, {useState} from 'react';
import style from './ProfilesList.module.css';
import {IoIosArrowRoundForward} from "react-icons/io";
import {Col, Container, Row} from "react-bootstrap";
import ProfileItem from "./ProfileItem";
import AdvertiserFilter from "./AdvertiserFilter";
import OptionFilter from "./OptionFilter";

const ProfilesList = () => {

    const [advertiserTypeFilter, setAdvertiserTypeFilter] = useState({
        All: true,
        Individual: false,
        Companies: false
    });

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

    return (
        <Container>
            <Row>
                <Col>
                    <div className={style.profilesMainBlock}>

                        <div className={style.headers}>
                            <h5 className={style.address}>
                                Медицина <IoIosArrowRoundForward/> Врачи
                            </h5>
                        </div>

                        <div className={style.sorts}>

                            <AdvertiserFilter
                                advertiserTypeFilter={advertiserTypeFilter}
                                changeAdvertiserFilter={changeFilter(advertiserTypeFilter, setAdvertiserTypeFilter)}/>

                            <OptionFilter optionTypeFilter={optionTypeFilter}
                                          changeOptionFilter={changeFilter(optionTypeFilter, setOptionTypeFilter)}/>

                        </div>

                        <div className={style.profilesList}>
                            <ProfileItem/>
                            <ProfileItem/>
                            <ProfileItem/>
                            <ProfileItem/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};
export default ProfilesList

