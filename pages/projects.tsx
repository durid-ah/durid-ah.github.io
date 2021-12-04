import Head from 'next/head';
import Layout from "../component/layout";
import { NavLocation } from "../models/nav_location";

import styles from "../styles/Projects.module.css";

export default function Projects() {
   return (
      <>
         <Layout location={NavLocation.Projects}>
            <Head>
               <title>Durid&apos;s Portfolio - Projects</title>
               <meta property="og:title" content="Durid's Portfolio" />
               <meta property="og:type" content="website" />
               <meta property="og:url" content="https://durid-ah.github.io/" />
               <meta property="og:description" content="Checkout my hobby projects!" />
               <meta property="og:image" content={require("../images/iconmonstr-code-6.svg")} />
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
               <div className={styles.centerContent}>
                  
               </div>
            </main>
         </Layout>
      </>
   )
}