import Image from 'next/image'
import * as styles from '../styles/main.module.scss'
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className={`${styles.h1}`}>
        Hello World
      </div>
    </Layout>
  )
}
