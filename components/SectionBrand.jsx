import React, { Children } from 'react'
import PropTypes from 'prop-types'
import * as styles from "../styles/main.module.scss";

const SectionBrand = ({ title, children, src }) => {
    return (
        <div className={`${styles.sectionbrand}`}>
            <div className={`${styles.sectionbrand__text}`}>
                <h2 className={`${styles.sectionbrand__text__title}`}>{title}</h2>
                <p className={`${styles.sectionbrand__text__description}`}>
                    {children}
                </p>
            </div>
            <div className={`${styles.sectionbrand__img}`}>
                <img src={src} />
            </div>
        </div>
    )
}

SectionBrand.propTypes = {}

export default SectionBrand