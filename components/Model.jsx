import React from 'react'
import PropTypes from 'prop-types'
import * as styles from '../styles/main.module.scss'

const Model = ({ alt, src, envImg, poster }) => {
    return (
        <>
            <div className={`${styles.model}`}>
                <model-viewer
                    alt={alt}
                    src={src}
                    ar
                    loading="lazy"
                    environment-image={envImg}
                    poster={poster}
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    touch-action="pan-y"
                >
                </model-viewer>
            </div>
        </>
    )
}

Model.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.required,
    envImg: PropTypes.string,
    poster: PropTypes.string
}

export default Model