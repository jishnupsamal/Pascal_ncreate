import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'
import * as styles from '../styles/main.module.scss'
import NavBar from './NavBar'

function Layout({children, title="ECars"}) {
  return (

    <div className={`${styles.root}`}>
        <Head>
        <title>{`${title} - Pascal`}</title>
        <link rel="icon" href="./favicon.ico" />
        </Head>
        <NavBar />
        <h1 className={`${styles.h1}`}>Layout</h1>
        {children}
    </div>
  )
}

Layout.propTypes = {
    title : PropTypes.string,
    children : PropTypes.element,
}

export default Layout