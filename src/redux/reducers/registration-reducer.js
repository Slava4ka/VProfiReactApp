const ADD_ERROR_TO_ERRORS_STACK = "vprofiApp/registration-reducer/ADD-ERROR-TO-ERRORS-STACK";
const REMOVE_ERROR_FROM_ERRORS_STACK = "vprofiApp/registration-reducer/REMOVE-ERROR-FROM-ERRORS-STACK";

let initialState = {
    errorsStack: [],
    errors: []
};

const remove = (state, action) => {

    const currentErrorStack = state.errorsStack.filter(item => Object.keys(item)[0] !== Object.keys(action.error)[0]);

    return {
        ...state,
        errorsStack: currentErrorStack,
        errors: (currentErrorStack.length > 0) ? Object.values(currentErrorStack[0])[0] : false
    }

};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR_TO_ERRORS_STACK: {
            return {
                ...state,
                errorsStack: [...state.errorsStack, action.error],
                errors: (Object.values(action.error)[0])
            }
        }

        case REMOVE_ERROR_FROM_ERRORS_STACK: {
            return remove(state, action)
        }

        default:
            return state
    }
};

export const addErrorToStack = (error) => ({type: ADD_ERROR_TO_ERRORS_STACK, error});
export const removeErrorFromStack = (error) => ({type: REMOVE_ERROR_FROM_ERRORS_STACK, error});

export default registrationReducer;