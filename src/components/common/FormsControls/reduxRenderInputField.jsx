import React from 'react';
import stylesFormsControls from './FormsControls.module.css';
import {connect} from "react-redux";
import {addErrorToStack, removeErrorFromStack} from "../../../redux/reducers/registration-reducer";

const reduxRenderInputField = ({input, label, type, meta: {touched, error}, addErrorToStack, removeErrorFromStack}) => {
    const hasError = touched && error;
    console.log(`error ${label} ${type} - ${hasError}`);

    if (hasError) {
        addErrorToStack({[type]: hasError})
    } else {
        removeErrorFromStack({[type]: hasError})
    }

    return (
        <div>
            <input {...input} placeholder={label} type={type}
                   className={`form-control ${stylesFormsControls.formControlCustom} ${(hasError ? stylesFormsControls.error : "")}`}/>
        </div>
    )
};

export default connect(null, {addErrorToStack, removeErrorFromStack})(reduxRenderInputField)