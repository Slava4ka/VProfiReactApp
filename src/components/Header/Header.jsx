import React, {useState, useEffect} from 'react';
import styles from './Header.module.css';
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";

const Header = ({isHeaderVisible}) => {

    const [topNavBarHide, setTopNavBarHide] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let navbarSize = document.getElementById('commonNavBar').offsetHeight;
            let scrollTop = document.documentElement.scrollTop;

            //    console.log("navbarSize " + navbarSize + "px");
            //   console.log("scrollTop " + scrollTop);

            if (scrollTop > navbarSize) {
                setTopNavBarHide(false)
            } else {
                setTopNavBarHide(true)
            }
            // console.log(topNavBarHide);
        });
    });


    return (
        <div id="commonNavBar"
             className={(!isHeaderVisible) ? `${styles.displayNone} ${styles.commonNavBar}` : `${styles.commonNavBar}`}>

            <TopNavBar topNavBarHide={topNavBarHide}/>
            <BottomNavBar/>

        </div>)
};

export default Header;


