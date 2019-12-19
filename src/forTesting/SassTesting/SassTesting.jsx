import React from 'react'
import style from './ScssTesting.module.scss'

const SassTesting = () => {
    return <div className={style.mainDiv}>
        <div className={style.block}>
            <button>Ok</button>
        </div>
        <div className={style.block}>
            <button>Ok</button>
        </div>
        <div className={style.block}>
            <button>Ok</button>
        </div>
    </div>
};

export default SassTesting