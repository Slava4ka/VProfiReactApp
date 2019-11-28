import React, {useState, useRef} from 'react';
import style from './ProfilesList.module.css';
import {FiUser, FiShare, FiStar, FiMail} from "react-icons/fi";
import {FaStar, FaVk, FaFacebook, FaOdnoklassniki, FaTwitter} from "react-icons/fa";
import {Button, Col, Container, Overlay, Row, Tooltip} from "react-bootstrap";


const ProfileItem = () => {

    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <div className={style.profile}>
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col md={2}>

                        <div className={style.mediaData}>
                            <div className={style.avatar}>
                                <FiUser style={{width: '170px', height: '170px'}}/>
                            </div>
                            <div className={style.ratingAndCommentCounterBox}>
                                <div className={style.rating}>
                                    <span className={style.count}>5,0</span>
                                    <span className={style.label}>Рейтинг</span>
                                </div>
                                <div className={style.commentsCounter}>
                                    <span className={style.count}>99</span>
                                    <span className={style.label}>Отзывов</span>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col md={5}>

                        <div className={style.infoData}>

                            <div className={style.fullName}>
                                <span className={style.surname}>Фамилия</span>
                                <span className={style.namePatronymic}>Имя Отчество</span>
                            </div>

                            <div className={style.directionSpecialitySpecialization}>
                                <span>Направление</span>
                                <span>Специальность</span>
                                <span>Специалтзация</span>
                            </div>

                            <div className={style.workExperience}>
                                <span>Стаж</span>
                            </div>

                            <div className={style.academicDegree}>
                                <span>Ученая степень</span>
                            </div>

                            <div className={style.rank}>
                                <span>Ранг</span>
                            </div>

                        </div>

                    </Col>

                    <Col md={5}>
                        <div className={style.contactData}>
                            <div className={style.organization}>
                                <span>Название организации</span>
                            </div>
                            <div className={style.address}>
                                Адрес организации, к примеру: 344025 г. Назрань, пропект мира 48/7
                            </div>

                            <div className={style.contacts}>
                                <span>Контакты</span>
                                <span className={style.label}>Телефон:  <a href="tel:+71234567890">+7(123)-456-78-90</a></span>
                                <span className={style.label}>Эл. почта: <a
                                    href="mailto:kakayatoPachta@yandex.ru?subject=Vprofi">kakayatoPachta@yandex.ru</a></span>
                            </div>
                            <div className={style.buttons}>
                                <Button variant="success">Написать сообщение</Button>
                                <Button variant="warning" title={'В избранное'}><FiStar size={'1.5em'}/></Button>

                                {/*<Button variant="warning" title={'Из избранного'}><FaStar size={'1.5em'}/></Button>*/}

                                <Button variant="secondary" title={'Поделиться'} ref={target}
                                        onClick={() => setShow(!show)} onBlur={() => setShow(false)}><FiShare
                                    size={'1.5em'}/></Button>
                                <Overlay target={target.current} show={show} placement="bottom">
                                    {props => (
                                        <Tooltip id="overlay-example" {...props}>
                                            <div className={style.socialShare}>
                                                <span title={'поделиться в ВК'}><FaVk/></span>
                                                <span title={'поделиться в Facebook'}> <FaFacebook/></span>
                                                <span title={'поделиться в Одноклассниках'}><FaOdnoklassniki/></span>
                                                <span title={'поделиться в Twitter'}><FaTwitter/></span>
                                                <span title={'поделиться по эл. почте'}> <FiMail/></span>
                                            </div>
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </div>


                            <div className={style.lastMonthReviews}>
                                <span className={style.label}>За последний месяц опубликовано 5 отзывов</span>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default ProfileItem