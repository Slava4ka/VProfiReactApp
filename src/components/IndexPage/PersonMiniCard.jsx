import React from 'react';
import styles from './IndexPage.module.css';
import {Card} from "react-bootstrap";

const PersonMiniCard = ({name, surname, patronymic, rating, profession, avatar}) => {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={avatar}/>
            <Card.Body className={styles.cardBody}>
                <span>{`${surname} ${name} ${patronymic}`}</span>
                <span>{profession}</span>
                <span>{rating}</span>
            </Card.Body>
        </Card>
    )
};

export default PersonMiniCard