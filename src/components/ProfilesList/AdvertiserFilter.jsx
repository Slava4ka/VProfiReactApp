import React from 'react';
import style from './ProfilesList.module.css';

const AdvertiserFilter = ({advertiserTypeFilter, changeAdvertiserFilter}) => {
    return (
        <div className={style.advertiserTypeFilters}>

            <span id={'All'} onClick={() => changeAdvertiserFilter('All')}
                  className={(advertiserTypeFilter.All) ? `${style.advertiserType} ${style.activeFilter}` : `${style.advertiserType}`}>
                                    Все</span>

            <span id={'Individual'} onClick={() => changeAdvertiserFilter('Individual')}
                  className={(advertiserTypeFilter.Individual) ? `${style.advertiserType} ${style.activeFilter}` : `${style.advertiserType}`}>
                                    Частные</span>

            <span id={'Companies'} onClick={() => changeAdvertiserFilter('Companies')}
                  className={(advertiserTypeFilter.Companies) ? `${style.advertiserType} ${style.activeFilter}` : `${style.advertiserType}`}>
                                    Компании</span>
        </div>)
};

export default AdvertiserFilter
