import React from 'react'
import * as styles from "../styles/main.module.scss";
import Layout from "../components/layout";
import SectionBrand from '../components/SectionBrand';

const brand = () => {
  return (
    <Layout title='Brand'>
        <div className={`${styles.brand}`}>
            <h1 className={`${styles.brand__title}`}>Brand</h1>
            <SectionBrand title="Logo" src='/images/greycar.jpg'>
                This logo represens the <em>Pascal</em> brand. It stands for creattivity and uniqueness.
            </SectionBrand>

            <SectionBrand title="Colours" src='/images/colors.jpg'>
                This colour palette is designed to represent the ideology of our brand.
                We use <b>Panay Pink</b> as our primary colour and <b>Dark Sienna</b> as secondary colour.
                The rest are accent colours.
            </SectionBrand>
        </div>
    </Layout>
  )
}

export default brand