import React from 'react'
import PropTypes from 'prop-types'
// import Image from 'next/image'
import * as styles from '../styles/main.module.scss'

const Section = ({ title, align, img, children }) => {
  return (
    <div className={`${styles.section}`}>
      {align == 'left' ?
        (<div className={`${styles.section__content_left}`}>
          <div className={`${styles.section__text}`}>
            <h3 className={`${styles.section__title}`}>
              {title}
            </h3>
            <p>
              {children}
            </p>
          </div>
          <div className={`${styles.section__content_left__img}`}>
            <img src={img} alt="Pascal Cars" />
          </div>
        </div>) : (
          <div className={`${styles.section__content_right}`}>
            <div className={`${styles.section__content_right__img}`}>
              <img src={img} alt="Pascal Cars" />
            </div>
            <div className={`${styles.section__text}`}>
              <h3 className={`${styles.section__title}`}>
                {title}
              </h3>
              <p>
                {children}
              </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.any
}

export default Section