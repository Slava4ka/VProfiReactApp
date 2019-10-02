import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (<div className={`${styles.greeting}`}>
        <div className={`${styles.text}`}>
            <span>Greeting on VPROFI.COM!</span>
        </div>
    </div>)
};

export default Main;