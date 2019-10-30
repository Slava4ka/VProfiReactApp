const EMPTY_FIELD = 'Необходимо заполнить все поля';

export const validateRegistration = values => {
    const errors = {};

    if (!values.email) {
        errors.email = EMPTY_FIELD
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный адрес электронной почты'
    }

    if (!values.password) {
        errors.password = EMPTY_FIELD
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(values.password)) {
        errors.password = 'Должен содержать не менее одной цифры, одной заглавной и строчной буквы и не менее 8 символов'
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = EMPTY_FIELD
    } else if ((!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(values.repeatPassword))) {
        errors.repeatPassword = 'Должен содержать не менее одной цифры, одной заглавной и строчной буквы и не менее 8 символов'
    } else if ((values.password !== values.repeatPassword)) {
        errors.repeatPassword = 'Введеные пароли должны совпадать'
    }

    if (!values.tel) {
        errors.tel = EMPTY_FIELD
    } else if ((!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,10}$/i.test(values.tel))) {
        errors.tel = 'Введите корректный номер телефона';
    }

    if (!values.agree) {
        errors.agree = 'Необходимо принять пользовательское соглашение'
    }

    return errors
};

export const signInValidate = values => {
        console.log("signInValidate");
        const errors = {};

        if (!values.emailOrTelephoneNumber) {
            errors.emailOrTelephoneNumber = EMPTY_FIELD;
        } else if ((/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(values.emailOrTelephoneNumber))) {
            console.log(values.emailOrTelephoneNumber);
            const validNumber = values.emailOrTelephoneNumber.replace(/[^\d]/g, '');
            if (11 !== validNumber.length) {
                errors.emailOrTelephoneNumber = "Неверный номер телефона";
            }
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailOrTelephoneNumber)) {
            console.log(values.emailOrTelephoneNumber);
            errors.emailOrTelephoneNumber = "Неверный номер телефона или адрес электронной почты";
        }

        if (!values.password) {
            errors.password = EMPTY_FIELD
        }

        return errors
    };