import React, {useEffect} from 'react';
import style from './Registration.module.css';
import ReduxRegistrationForm from "./RegistrationForm";
import {NavLink} from "react-router-dom";
import {registration, login} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";

const Registration = ({hideHeader, showHeader,registration, login, isAuth}) => {

// если пользователь авторизован, то сюда он никак не дожен попасть!!!!!

    useEffect(() => {
        hideHeader();
        return () => {
            showHeader();
        };
    },);

    const onSubmit = (formData) => {
        console.log("Submit");
        console.log(formData);
        registration("login", "email", "password")
        //login("email", "password")
    };


    return (<div className={`text-center ${style.registrationPage}`}>
            <NavLink to={'/'}>
                <img className="mb-5" src="5551.png" alt="" width="300px" height="100px"/>
            </NavLink>
            <ReduxRegistrationForm onSubmit={onSubmit}/>
            <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>

        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {registration, login})(Registration)