import React from 'react';
import stylesFormsControls from './FormsControls.module.css';
import {connect} from "react-redux";
import {addErrorToStack, removeErrorFromStack} from "../../../redux/reducers/registration-reducer";

const reduxRenderCheckBoxField = ({
                                      input, label, type,
                                      meta: {touched, error},
                                      addErrorToStack, removeErrorFromStack,
                                      disabled
                                  }) => {
    const hasError = touched && error;

    // console.log(`error ${label} ${type} - ${hasError}`);

    if (hasError) {
        addErrorToStack({[type]: hasError})
    } else {
        removeErrorFromStack({[type]: hasError})
    }

    return (
        <div>
            <label>
                <input {...input} placeholder={label} type={type} disabled={disabled}
                       className={`${stylesFormsControls.checkbox} ${(hasError ? stylesFormsControls.errorCheckbox : "")}`}/>
                Согласен с <a href={'https://yandex.ru/legal/rules/'}>пользовательским соглашением</a>
            </label>
        </div>
    )
};


export default connect(null, {addErrorToStack, removeErrorFromStack})(reduxRenderCheckBoxField)