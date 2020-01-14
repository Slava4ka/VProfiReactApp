import React from 'react'
import style from './Breadcrumbs.module.scss'
import { FiChevronRight } from 'react-icons/fi'

/**
 *
 * @param crumbs (name, link)
 * @param goToCategory
 * @returns {*}
 * @constructor
 */

const Breadcrumbs = ({crumbs, goToCategory}) => {

    let breadcrumbsContent = []

    for (let step = 0; step < crumbs.length; step++) {
        breadcrumbsContent.push({ crumbObj: crumbs[step], id: step + 1 })
        if (step < crumbs.length - 1) {
            breadcrumbsContent.push('FiChevronRight')
        }
    }

    return <div className={style.breadcrumbs}>
        {breadcrumbsContent.map((crumb, id) =>
            crumb !== 'FiChevronRight' ? (
                <span
                    key={id}
                    className={style.breadcrumbs__crumb}
                    onClick={() => goToCategory(crumb.crumbObj.link)}
                >
						{crumb.crumbObj.name}
					</span>
            ) : (
                <FiChevronRight key={id} className={style.breadcrumbs__chevronRight} />
            )
        )}

    </div>
}


export default Breadcrumbs
