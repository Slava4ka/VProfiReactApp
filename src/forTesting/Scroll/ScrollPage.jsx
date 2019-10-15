import React, {useState, useEffect} from "react";
import styles from "./ScrollPage.module.css";

const ScrollPage = () => {
    const [topNavbarHide, setTopNavbarHide] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let navbarSize = document.getElementById('navbar').offsetHeight;
            console.log("navbarSize " + navbarSize + "px");
            let scrollTop = document.documentElement.scrollTop;
            console.log("scrollTop " + scrollTop);
            if (scrollTop > navbarSize) {
                setTopNavbarHide(false)
            } else {
                setTopNavbarHide(true)
            }
            console.log(topNavbarHide);
        });
    });


    return (
        <div>
            <div id={"navbar"} className={styles.navbar}>
                <div
                    className={(topNavbarHide) ? `${styles.topNavbar}` : ` ${styles.hide}`}>
                </div>
                <div className={styles.bottomNavbar}>bottomNavbar</div>
            </div>

            <div className={styles.box}>
                3
            </div>

            <div className={styles.box1}>
                4
            </div>

            <div className={styles.box2}>
                5
            </div>

            <div className={styles.box}>
                6
            </div>

            <div className={styles.box1}>
                7
            </div>
        </div>
    )

};
export default ScrollPage

