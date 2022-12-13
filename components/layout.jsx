import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'
import * as styles from '../styles/main.module.scss'
import NavBar from './NavBar'
import Footer from "../components/Footer";

function Layout({children, title="ECars"}) {
  return (

    <div>
        <Head>
        <title>{`${title} - Pascal`}</title>
        <link rel="icon" href="./favicon.ico" />
        </Head>
        <NavBar />
        {/* <h1 className={`${styles.h1}`}>Layout</h1> */}
        {children}
        <Footer />
    </div>
  )
}

Layout.propTypes = {
    title : PropTypes.string,
    children : PropTypes.element,
}

export default Layout