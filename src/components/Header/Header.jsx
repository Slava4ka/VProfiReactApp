import React from 'react';
import styles from './Header.module.css';
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Header = ({isHeaderVisible}) => {
    return (
        <div className={(!isHeaderVisible) ? `${styles.displayNone} ${styles.navbar}` : `${styles.navbar}`}>
            <TopNavbar/>
            <BottomNavbar/>
        </div>)
};

export default Header;


