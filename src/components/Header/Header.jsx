import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import TopNavBar from './TopNavBar'
import BottomNavBar from './BottomNavBar'
import TabsPanel from '../TabsPanel/TabsPanel'

const Header = ({ isHeaderVisible }) => {
	const [topNavBarHide, setTopNavBarHide] = useState(true)

	/*
    useEffect(() => {
        window.addEventListener('scroll', function () {
            let navbarSize = document.getElementById('commonNavBar').offsetHeight;
             let scrollTop = document.documentElement.scrollTop;

            /*
            console.log("navbarSize " + navbarSize + "px");
            console.log("scrollTop " + scrollTop);
            */
	/*
            if (scrollTop > navbarSize) {
                setTopNavBarHide(false)
            } else {
                setTopNavBarHide(true)
            }
            // console.log(topNavBarHide);
        });
    });
*/
	const [tabsPanelVisible, setTabsPanelVisible] = useState(false)

	const openCloseTabs = () => {
		console.log('openCloseTabs')
		setTabsPanelVisible(!tabsPanelVisible)
	}

	return (
		<div
			id='commonNavBar'
			onMouseLeave={() => setTabsPanelVisible(false)}
			className={
				!isHeaderVisible
					? `${styles.displayNone} ${styles.commonNavBar}`
					: `${styles.commonNavBar}`
			}
		>
			<TopNavBar topNavBarHide={topNavBarHide} />
			<BottomNavBar openCloseTabs={openCloseTabs} />
			<TabsPanel tabsPanelVisible={true} />
		</div>
	)
}

export default Header
