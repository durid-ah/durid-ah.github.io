import Head from "next/head";
import Layout from "../component/layout";
import { NavLocation } from "../models/nav_location";

import styles from "../styles/Resume.module.css";

export default function Resume() {
   return (
      <Layout location={NavLocation.Resume}>
         <Head>
            <title>Durid&apos;s Portfolio - Projects</title>
            <meta property="og:title" content="Durid's Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://durid-ah.github.io/" />
            <meta property="og:description" content="Checkout my hobby projects!" />
            <meta property="og:image" content={"./images/iconmonstr-code-6.svg"} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={styles.main}>

         </main>
      </Layout>
   )
}