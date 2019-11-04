import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {setStatusToNewUserAlert} from "./signUpAndIn-reducer";

const SET_USER_DATA = 'vprofiApp/auth-reducer/SET-USER-DATA';
const SET_IS_AUTH = 'vprofiApp/auth-reducer/SET-IS-AUTH';
const TOGGLE_IS_FETCHING = "vprofiApp/auth-reducer/TOGGLE-IS-FETCHING";

let initialState = {
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }

        case SET_IS_AUTH: {
            return {...state, isAuth: action.isAuth}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
};

const setAuthUserStatus = (isAuth = true) => ({type: SET_IS_AUTH, isAuth});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const registration = (telephone, email, password) => {
    console.log("registration");
    const legalTelephoneNumber = telephone.replace(/[^\d]/g, '');
    return (dispatch) => {
        dispatch(setToggleFetching(true));

        authApi.registration(legalTelephoneNumber, email, password).then(response => {

            if (response.status === 204) {
                dispatch(getAuthUserStatus());
                dispatch(setStatusToNewUserAlert(true));
                console.log("SignUp completed successfully");
            } else {
                console.log(response)
            }
        }).catch(error => {

            console.log(error.response);
            console.log("status is " + error.response.status);

            const message = error.response.data ? `code ${error.response.data.code} - ${error.response.data.message}` : 'Some error';
            dispatch(stopSubmit('registration', {_error: message}));

        }).finally(() => dispatch(setToggleFetching(false)));
    }
};

export const login = (emailOrTelephoneNumber, password) => {
    console.log("login");

    const normalizeUsersIdent = (usersIdent) => {
        switch (true) {
            case ((/^((8)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(usersIdent))):
                let validNumber = usersIdent.replace(/[^\d]/g, '');
                return validNumber.replace('8', '7');
            case ((/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(usersIdent))):
                return usersIdent.replace(/[^\d]/g, '');
            default:
                return usersIdent
        }
    };

    const userIdentifier = normalizeUsersIdent(emailOrTelephoneNumber);
    console.log(`userIdentifier ${userIdentifier}; password ${userIdentifier}`);

    return (dispatch) => {
        dispatch(setToggleFetching(true));

        authApi.login(userIdentifier, password).then(response => {
            dispatch(getAuthUserStatus())
        }).catch(error => {
            console.log(error.response);
            console.log("status is " + error.response.status);

            const message = error.response.data ? `code ${error.response.data.code} - ${error.response.data.message}` : 'Some error';
            dispatch(stopSubmit('signIn', {_error: message}));

        }).finally(() => dispatch(setToggleFetching(false)));
    }
};

export const getAuthUserStatus = () => {
    console.log("getAuthUserStatus");
    return (dispatch) => {
        authApi.checkAuth().then(response => {
            if (response.status === 204) {
                dispatch(setAuthUserStatus());
                console.log("аутентификация выполнена");
            }
        }).catch(error => {
            setAuthUserStatus(false);
            console.log(error.response.status === 401 ? "аутентификация не выполнена"
                : `error code is ${error.response.status}`);
        })
    }
};

export const logOut = () => {
    console.log("logOut");
    return (dispatch) => {
        authApi.loginOut().then(response => {
            if (response.status === 204) {
                dispatch(setAuthUserStatus(false));
                console.log("вылогинизация выполнена");
            }
        })
    }
};

export default authReducer;