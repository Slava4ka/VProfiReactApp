import React from 'react';
import style from './TabsPanel.module.css';

const AllSpecializations = ({showAllSpecializations, getCurrentSpecializations}) => {

    const specializations = getCurrentSpecializations(showAllSpecializations.state.id).map(
        specialization => specialization.name
    );

    return (
        <div className={style.allSpecializations}>
            {
                specializations.map(specialization =>
                    <span className={style.oneLine}>
                        <a href="#" className={style.specialization}>{specialization}</a>
                    </span>)
            }
        </div>
    )
};
export default AllSpecializations