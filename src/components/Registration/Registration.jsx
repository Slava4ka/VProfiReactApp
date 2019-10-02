import React, {useEffect} from 'react';
import style from './Registration.module.css';

const Registration = ({hideHeader, showHeader}) => {

    useEffect(() => {
        hideHeader();
        return () => {
            showHeader();
        };
    },);


    return (<div className={`text-center ${style.registrationPage}`}>

            <form className={style.formSignIn}>
                <img className="mb-5" src="5551.png" alt="" width="300px" height="100px"/>



                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className={`form-control ${style.formControl}`}
                       placeholder="Адрес электронной почты" required=""
                       autoFocus=""/>

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className={`form-control ${style.formControl}`}
                       placeholder="Пароль" required=""/>

                <label htmlFor="repeatPassword" className="sr-only">Repeat password</label>
                <input type="password" id="repeatPassword" className={`form-control ${style.formControl}`}
                       placeholder="Повторите пароль" required=""/>


                <label htmlFor="telInput" className="sr-only">Telephone number</label>
                <input type="tel" id="telInput" className={`form-control ${style.formControl}`}
                       placeholder="Номер телефона" required=""/>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Согласен с  <a
                        href={'https://yandex.ru/legal/rules/'}>пользовательским соглашением</a>
                    </label>
                </div>

                <button className="btn btn-lg btn-success btn-block" type="submit">Зарегистрироваться</button>

                <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>
            </form>

        </div>
    )
};

export default Registration;