import React from 'react';
import style from './ProfilesList.module.css';

const OptionFilter = ({optionTypeFilter, changeOptionFilter}) => {
    return (
        <div className={style.optionFilter}>
            <span>Сортировка по: </span>
            <div className={style.optionTypeFilters}>
                <span id={'Date'} onClick={() => changeOptionFilter('Date')}
                      className={(optionTypeFilter.Date) ? `${style.optionType} ${style.activeFilter}` : `${style.optionType}`}>Дате</span>
                <span id={'Rating'} onClick={() => changeOptionFilter('Rating')}
                    className={(optionTypeFilter.Rating) ? `${style.optionType} ${style.activeFilter}` : `${style.optionType}`}>Рейтингу</span>
                <span id={'Experience'} onClick={() => changeOptionFilter('Experience')}
                    className={(optionTypeFilter.Experience) ? `${style.optionType} ${style.activeFilter}` : `${style.optionType}`}>Стажу</span>
                <span id={'Cost'} onClick={() => changeOptionFilter('Cost')}
                    className={(optionTypeFilter.Cost) ? `${style.optionType} ${style.activeFilter}` : `${style.optionType}`}>Стоимости</span>
            </div>
        </div>)
};

export default OptionFilter

