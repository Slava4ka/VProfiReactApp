import React from 'react';
import {Route} from "react-router-dom";
import styles from './Header.module.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
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


