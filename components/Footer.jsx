import React from 'react'
import * as styles from '../styles/main.module.scss'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        &copy; { new Date().getFullYear() } &middot; Designed by {' '}
        <a href='https://warpclub.in' target='_blank' rel='noreferrer noopener'>
            WarP
        </a>
    </div>
  )
}

export default Footer