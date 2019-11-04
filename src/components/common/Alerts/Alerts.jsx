import React from 'react';
import style from './Alerts.module.css';
import {Alert} from 'react-bootstrap';

export const ErrorAlert = ({data}) => {
    return (<AlertTemplate type={'danger'} data={data}/>)
};

export const SuccessAlert = ({data}) => {
    return (<AlertTemplate type={'success'} data={data}/>)
};

const AlertTemplate = ({type, data}) => {
    return (
        <Alert className={style.alert} variant={type}>
            {data}
        </Alert>)
};