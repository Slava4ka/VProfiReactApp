import React from 'react';
import stylesFormsControls from './FormsControls.module.css';
import stylesRegistrationForm from '../../Registration/Registration.module.css'

export const renderInputField = ({input, label, type, meta: {touched, error}}) => {
    const hasError = touched && error;
    return (
        <div>
            <input {...input} placeholder={label} type={type}
                   className={`form-control ${stylesRegistrationForm.formControl} ${(hasError ? stylesFormsControls.error : "")}`}/>
            {hasError && <span className="text-danger">{error}</span>}
        </div>
    )
};

export const renderCheckBoxField = ({input, label, type, meta: {touched, error}}) => {
    const hasError = touched && error;
    return (
        <div>
            <label>
                <input {...input} placeholder={label} type={type} className={stylesFormsControls.checkbox}/>
                Согласен с <a href={'https://yandex.ru/legal/rules/'}>пользовательским соглашением</a>
            </label>
            {hasError && <span className="text-danger">{error}</span>}
        </div>
    )
};