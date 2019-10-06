import React from "react";

const SET_PASSWORDS_ARE_EQUALS = 'vprofiApp/registration-reducer/PASSWORDS-ARE-EQUALS';
const SET_AGREEMENT_CHECKED = 'vprofiApp/registration-reducer/AGREEMENT-CHECKED';

let initialState = {
    passwords_are_equals: true,
    isAgreementChecked: true
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSWORDS_ARE_EQUALS: {
            return {...state, passwords_are_equals: action.passwords_are_equals}
        }
        case SET_AGREEMENT_CHECKED: {
            return {...state, isAgreementChecked: action.agreement_checked}
        }
        default: {
            return state
        }
    }
};

const setPasswordsAreEquals = (passwords_are_equals) => ({type: SET_PASSWORDS_ARE_EQUALS, passwords_are_equals});
const setAgreementChecked = (agreement_checked) => ({type: SET_AGREEMENT_CHECKED, agreement_checked});


export const checkPasswordsMatching = (firstPassword, secondPassword) => {
    return (dispatch) => {
        console.log("checkPasswordsMatching");
        if (firstPassword !== secondPassword) {
            console.log("!==");
            console.log(firstPassword + " " + secondPassword);
            dispatch(setPasswordsAreEquals(false))
        } else {
            dispatch(setPasswordsAreEquals(true))
        }
    }
};

export const checkAgreementChecked = (checkBoxData) => {
    return (dispatch) => {
        console.log("checkAgreementChecked");
        if (checkBoxData) {
            dispatch(setAgreementChecked(true))
        } else {
            dispatch(setAgreementChecked(false))
        }
    }
};

export default registrationReducer;