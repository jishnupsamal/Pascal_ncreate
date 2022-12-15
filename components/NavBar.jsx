import React from 'react'
import * as styles from '../styles/main.module.scss'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className={`${styles.nav}`}>

      <div className={`${styles.nav__items}`}>
        <span className={`${styles.nav__brand}`}>Pascal</span>
        {/* <RxHamburgerMenu 
          className={`${styles.nav__items__hamburger_btn}`}
          onClick={console.log('clicked')} /> */}
        {/* <div className={`${styles.nav__items__links}`}> */}
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
        {/* </div> */}
      </div>
    </nav>
  )
}

export default NavBar