import React from 'react';
import styles from './Preloader.module.css'

const InitialPreloader = () => {
    return <div>
        <div className={styles.logo}>
            <img src={"5551.png"}  alt={"preloader"} className={styles.preloader}/>
        </div>
    </div>
};

export default InitialPreloader
