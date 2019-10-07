import React from 'react';

export const validateRegistration = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(values.password)) {
        errors.password = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = 'Required'
    } else if ((!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(values.repeatPassword))) {
        errors.repeatPassword = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
    } else if ((values.password !== values.repeatPassword)) {
        errors.repeatPassword = 'Passwords must be equals'
    }

    if (!values.tel) {
        errors.tel = 'Required'
    } else if ((!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$/i.test(values.tel))) {
        errors.tel = 'SignIn correct telephone number';
    }

    if (!values.agree) {
        errors.agree = 'Must agree'
    }

    return errors
};

export const signInValidate = values => {
    console.log("signInValidate");
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
};