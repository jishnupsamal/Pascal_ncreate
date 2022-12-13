// import * as styles from "../styles/main.module.scss";
import "../styles/globals.css";
import Script from "next/script";

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
