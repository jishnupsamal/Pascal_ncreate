import React from 'react'
import PropTypes from 'prop-types'
import * as styles from '../styles/main.module.scss'
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = ({ title }) => {
    return (
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero__content}`}>
                <h1 className={`${styles.hero__content__title}`}>
                    {title}
                </h1>
                <p className={`${styles.hero__content__sub}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus incidunt vel asperiores id veritatis, voluptatum neque at sequi cupiditate.
                </p>
                <a href="#main">
                    <button
                        className={`${styles.button__transparent}`}
                        // onClick={document.querySelector('#main').scrollIntoView()}
                    >
                        Discover <RxDoubleArrowRight className={`${styles.icon_inherit}`} />
                    </button>
                </a>
            </div>

            <div className={`${styles.hero__arrow}`}>
                <FaAngleDoubleDown className={`${styles.icon_64}`} />
            </div>
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Hero