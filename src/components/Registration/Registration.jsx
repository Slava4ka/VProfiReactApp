import React, {useEffect} from 'react';
import style from './Registration.module.css';
import ReduxRegistrationForm from "./RegistrationForm";
import {NavLink, Redirect} from "react-router-dom";
import {registration} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {ErrorAlert} from "../common/Alerts/Alerts";
import {cleanErrorStack} from "../../redux/reducers/signUpAndIn-reducer";

const Registration = ({hideHeader, showHeader, registration, errorsFromInput, isAuth, isFetching, cleanErrorStack}) => {

// если пользователь авторизован, то сюда он никак не дожен попасть!!!!!

    useEffect(() => {
        hideHeader();
        cleanErrorStack();
        return () => {
            showHeader();
        };
    }, []);

    const onSubmit = (formData) => {
        console.log("Submit!");
        console.log(formData);
        registration(formData.tel, formData.email, formData.password);
    };

    // это потом надо сделать хуком
    if (isAuth) {
        return <Redirect to={'/'}/>
    } else {
        return (<div className={`text-center ${style.registrationPage}`}>
                <NavLink to={'/'}>
                    <img className="mt-4 mb-3" src="5551.png" alt="" width="300px" height="100px"/>
                </NavLink>
                <ReduxRegistrationForm onSubmit={onSubmit} disabled={isFetching}/>
                <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>

                {
                    errorsFromInput &&
                    <ErrorAlert data={errorsFromInput}/>
                }
            </div>
        )
    }
};

const mapStateToProps = state => ({
    errorsFromInput: state.registrationAndLogIn.errors,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {registration, cleanErrorStack})(Registration)
