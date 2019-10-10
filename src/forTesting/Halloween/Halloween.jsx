import React from 'react';
import styles from './Halloween.module.css'

const Halloween = () => {
    return (<div className={`${styles.flex} ${styles.halloween_body}`} >
        <div className={`${styles.main} ${styles.flex}`}>
            <div className={styles.frank}>
                <div className={`${styles.head} ${styles.flex}`}>
                    <div className={styles.head__t}></div>
                    <div className={styles.head__m}>
                        <div className={styles.face}>
                            <div className={`${styles.eye} ${styles.flex}`}>
                                <div className={styles.eye__l}></div>
                                <div className={styles.eye__r}></div>
                            </div>
                            <div className={`${styles.nose} ${styles.flex}`}>
                                <div className={styles.nose__t}></div>
                                <div className={styles.nose__b}></div>
                            </div>
                            <div className={styles.mouth}></div>
                            <div className={styles.teeth}>
                                <div className={styles.teeth__l}></div>
                                <div className={styles.teeth__m}></div>
                                <div className={styles.teeth__r}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.head__b}></div>
                </div>
                <div className={`${styles.hair} ${styles.flex}`}>
                    <div className={styles.hair__t}></div>
                    <div className={`${styles.hair__m} ${styles.black}`}></div>
                    <div className={`${styles.hair__b} ${styles.black}`}></div>
                </div>
                <div className={`${styles.ear} ${styles.flex}`}>
                    <div className={styles.ear__l}></div>
                    <div className={styles.ear__r}></div>
                </div>
                <div className={styles.screws}>
                    <div className={styles.screws__l}></div>
                    <div className={styles.screws__r}></div>
                </div>
            </div>
        </div>
    </div>)
};
export default Halloween