import Image from "next/image";
import Head from 'next/head';
import * as styles from "../styles/main.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Model from "../components/Model";
import Section from "../components/Section";

export default function Home() {
  return (
    <Layout title="Home">
      <Head>
        <title>Pascal</title>
      </Head>
      <div className={`${styles.h1}`}>
        <Hero title="Pascal" />
        <div id='main'></div>
        <Section title="Stylish and Elegant" align='left' img="/images/greycar.jpg">
          Stunning and attractive look. {' '} Designed by the World's Greatest Engineers for {' '}
          the people of the world.
        </Section>

        <Model
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and 
          National Air and Space Museum" 
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr" 
          poster="./vercel.svg" 
        />

        <Section title="Environment Friendly" align='right' img="/images/bluecar.jpg">
          100% electric. {" "}
          Zero Carbon Emissions.
        </Section>
      </div>
    </Layout>
  );
}
