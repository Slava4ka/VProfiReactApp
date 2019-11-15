import React, {useState} from 'react';
import style from './TabsPanel.module.css';

const TabsPanel = ({tabsPanelVisible}) => {
    return(
        <div className={`${style.tabsPanel} ${tabsPanelVisible ? style.tabsPanelOpen : style.tabsPanelHidden}`}>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
            <h6>Каталог</h6>
        </div>
    )
};
export default TabsPanel