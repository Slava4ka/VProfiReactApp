const ADD_ERROR_TO_ERRORS_STACK = "vprofiApp/signUpAndIn-reducer/ADD-ERROR-TO-ERRORS-STACK";
const REMOVE_ERROR_FROM_ERRORS_STACK = "vprofiApp/signUpAndIn-reducer/REMOVE-ERROR-FROM-ERRORS-STACK";
const CLEAN_ERROR_STACK = "vprofiApp/signUpAndIn-reducer/CLEAN-ERROR-STACK";
const SHOW_ALERT_TO_NEW_USER = "vprofiApp/signUpAndIn-reducer/SHOW-ALERT-TO-NEW-USER";

let initialState = {
    errorsStack: [],
    errors: false,
    newUserAlert: false
};

const remove = (state, action) => {

    const currentErrorStack = state.errorsStack.filter(item => Object.keys(item)[0] !== Object.keys(action.error)[0]);

    return {
        ...state,
        errorsStack: currentErrorStack,
        errors: (currentErrorStack.length > 0) ? Object.values(currentErrorStack[0])[0] : false
    }

};

const signUpAndInReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR_TO_ERRORS_STACK: {
            return {
                ...state,
                errorsStack: [action.error, ...state.errorsStack],
                errors: (Object.values(action.error)[0])
            }
        }

        case REMOVE_ERROR_FROM_ERRORS_STACK: {
            return remove(state, action)
        }

        case CLEAN_ERROR_STACK: {
        debugger
            return {...state, errorsStack: [], errors: false}
        }

        case SHOW_ALERT_TO_NEW_USER: {
        return {...state, newUserAlert: action.status}
        }

        default:
            return state
    }
};

export const addErrorToStack = (error) => ({type: ADD_ERROR_TO_ERRORS_STACK, error});
export const removeErrorFromStack = (error) => ({type: REMOVE_ERROR_FROM_ERRORS_STACK, error});
export const setStatusToNewUserAlert = (status) => ({type: SHOW_ALERT_TO_NEW_USER, status});
export const cleanErrorStack = () => ({type: CLEAN_ERROR_STACK});

export default signUpAndInReducer;
