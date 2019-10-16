import React from 'react';
import styles from './IndexPage.module.css';
import {Card} from "react-bootstrap";

const PersonMiniCard = ({name, surname, patronymic, rating, profession, avatar}) => {
    return (
        <Card className={`${styles.card} ${styles.noBorderRadius}`}>
            <Card.Img variant="top" src={avatar}/>
            <Card.Body className={styles.cardBody}>
                <span className={styles.profession}><h6>{profession}</h6></span>
                <span className={styles.surname}>{surname}</span>
                <span className={styles.name}>{name}</span>
                <span className={styles.patronymic}>{patronymic}</span>
                <span className={styles.rating}>Рейтинг: {rating}</span>
            </Card.Body>
        </Card>
    )
};

export default PersonMiniCard