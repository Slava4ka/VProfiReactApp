import React from 'react';
import style from './TabsPanel.module.css'

const SpecialtySpecialization = ({currentTabsState, getCurrentSpecializations, setSpecializationsView}) => {

    const createSpecializationsContent = (arrSpecializations, isTooLong, currentSpecialty) => {
        if (isTooLong) {
            arrSpecializations.push({name: "Еще", target: 'more'})
        }

        return arrSpecializations.map((specialization, index) => (
                (specialization.target) ? (
                        <a href="#" key={index} className={style.specialization}
                           onClick={() => setSpecializationsView(true, currentSpecialty.id, currentSpecialty.name)}> {specialization.name}</a>) :
                    (<a href="#" key={index} className={style.specialization}> {specialization.name}</a>)
            )
        )
    };

    return (
        <>
            {
                currentTabsState.currentSpecialty.map((specialty, index) => (
                    <div className={style.specialty} key={index}>

                        <div className={style.specialtyName}>
                            <a href="#">{specialty.name}</a>
                        </div>

                        <div className={style.specializations}>
                            {
                                (getCurrentSpecializations(specialty.id).length > 8 && specialty.name !== false && specialty.haveChild === true) ?
                                    createSpecializationsContent(getCurrentSpecializations(specialty.id).slice(0, 8), true, specialty) :
                                    createSpecializationsContent(getCurrentSpecializations(specialty.id))
                            }
                        </div>
                    </div>))
            }
        </>
    )

};

export default SpecialtySpecialization
