import React, {useEffect} from 'react';
import style from './Registration.module.css';
import ReduxRegistrationForm from "./RegistrationForm";
import {NavLink} from "react-router-dom";
import {registration, login} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {Alert} from "react-bootstrap";

const Registration = ({hideHeader, showHeader, registration, login, errorsFromInput}) => {

// если пользователь авторизован, то сюда он никак не дожен попасть!!!!!

    useEffect(() => {
        hideHeader();
        return () => {
            showHeader();
        };
    },);

    const onSubmit = (formData) => {
        console.log("!!!!!!!!!!!!Submit!!!!!!!!!!!!!!!!!!!!");
        alert('Submit success');
        console.log(formData);
        registration("login", "email", "password")
        //login("email", "password")
    };


    return (<div className={`text-center ${style.registrationPage}`}>
            <NavLink to={'/'}>
                <img className="mt-4 mb-3" src="5551.png" alt="" width="300px" height="100px"/>
            </NavLink>
            <ReduxRegistrationForm onSubmit={onSubmit}/>
            <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>


            {
                errorsFromInput &&
                <Alert className={style.alert} variant={'danger'}>
                    {errorsFromInput}
                </Alert>

            }
        </div>
    )
};

const mapStateToProps = state => ({
    errorsFromInput: state.registrationAndLogIn.errors
});

export default connect(mapStateToProps, {registration, login})(Registration)