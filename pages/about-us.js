import React from 'react'
import Layout from "../components/layout"
import Section from '../components/Section'
import * as styles from '../styles/main.module.scss'

const AboutUs = () => {
  return (
    <Layout title="About Us">
        <div className={`${styles.about}`}>
          <h1 className={`${styles.about__title}`}>About Us</h1>
          <Section title='Radical Professionals' img='/images/group.jpg' align='left'>
            We are a group of radical professionals who imagine and invent the future.
          </Section>

          <Section title='Innovate' img='/images/purplecar.png' align='right'>
            Founded by Elon Saluja, we engineer next-gen electronic cars. 
          </Section>

          <Section title='Our Ambition' img='/images/aim.jpg' align='left'>
            Our aim is to design great rides and experiences for the world. Our cars are carbon-neutral
            and also contribute to environmental conservation.
          </Section>
        {/* 
          <Section title='' img='/images/greycar.jpg' align='right'>
            We 
          </Section> */}
        </div>

    </Layout>
  )
}

export default AboutUs