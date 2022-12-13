import Image from "next/image";
import * as styles from "../styles/main.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Model from "../components/Model";

export default function Home() {
  return (
    <Layout title="Home">
      <div className={`${styles.h1}`}>
        <Hero title="Pascal" />
        <div id='main'></div>
        <Model
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and 
          National Air and Space Museum" 
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr" 
          poster="./vercel.svg" 
        />
      </div>
    </Layout>
  );
}
