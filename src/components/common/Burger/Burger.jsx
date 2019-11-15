import React, {useState} from 'react';
import style from './Burger.module.css'

const Burger = ({isOpen}) => {
    console.log("isOpen " + isOpen);
    return <div className="menu">
        <a href="#" className={(isOpen) ? `${style.menu__btn} ${style.isOpen}` : style.menu__btn}>
            <span className={style.menu__burger}/>
            <span className={style.menu__exit}/>
        </a>
    </div>
};
export default Burger

