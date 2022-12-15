import React from 'react'
import * as styles from '../styles/main.module.scss'
import Link from 'next/link'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      &copy; {new Date().getFullYear()} &middot; Designed by {' '}
      <a href='https://warpclub.in' target='_blank' rel='noreferrer noopener'>
        WarP
      </a>

      <div className={`${styles.footer__links}`}>
          <Link href='/brand'>Brand Identity</Link>
      </div>
      <div className={`${styles.footer__social}`}>
        <a href="//facebook.com/pascal" target='_blank' rel='noreferrer noopener'>
          <BsFacebook className={`${styles.icon_32}`}/>
        </a>

        <a href="//twitter.com/pascal" target='_blank' rel='noreferrer noopener'>
          <BsTwitter className={`${styles.icon_32}`}/>
        </a>

        <a href="//linkedin.com/in/pascal" target='_blank' rel='noreferrer noopener'>
          <BsLinkedin className={`${styles.icon_32}`}/>
        </a>

        <a href="//linkedin.com/in/pascal" target='_blank' rel='noreferrer noopener'>
          <BsLinkedin className={`${styles.icon_32}`}/>
        </a>
      </div>
    </div>
  )
}

export default Footer