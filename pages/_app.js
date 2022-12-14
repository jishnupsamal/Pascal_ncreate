// import * as styles from "../styles/main.module.scss";
import "../styles/globals.css";
import Script from "next/script";
import "@fontsource/luxurious-roman"
import "@fontsource/abril-fatface"
import "@fontsource/patua-one"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
