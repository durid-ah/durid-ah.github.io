import Head from 'next/head';
import Link from "next/link";

import styles from '../styles/Home.module.css';
import Layout from "../component/layout";
import { NavLocation, PROJECT_URL } from '../models/nav_location';

export default function Home() {
  return (
    <Layout location={NavLocation.Home}>
      <Head>
        <title>Durid&apos;s Portfolio - Home Page</title>
        {/** TODO: Fix link card */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.introWrapper}>
          <div className={styles.intro}>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                <h1>Hi, my name&apos;s DURID AHMAD!</h1>
                <p>
                  I am a <span className={styles.focus}>Software Engineer</span> with 
                  experience working with clients of different backgrounds and translating 
                  their needs into working solutions. 
                  For 2+ years, I have built full-stack applications and integration tools that synchronize 
                  data with third-party systems. Feel free to check out my projects or reach out to me.
                </p>
                <div className={styles.buttonContainer}>
                  <button className={styles.btnSecondary}>Contact Me</button>
                  <Link href={PROJECT_URL} passHref>
                    <button className={styles.btnPrimary}>
                      <div>Projects</div>
                      <div className={styles.chevronIcon} 
                        dangerouslySetInnerHTML={{__html: require("../images/chevron-right-m.svg?include")}}>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactMe}>
          <h1>Contact Me</h1>
          <div className={styles.description}>Feel free to reach out to me through LinkedIn or email</div>
            <div className={styles.cardRow}>
              <Link href="https://www.linkedin.com/in/durid-ahmad/">
                <div className={styles.card}>
                  <div
                    className={styles.cardIcon} 
                    dangerouslySetInnerHTML={{__html: require("../images/iconmonstr-linkedin-2.svg?include")}}>
                  </div>
                  <h3>Send a DM</h3>                
                </div> 
              </Link>
              <Link href="mailto:ahmad.durid.dev@gmail.com">
                <div className={styles.card}>
                  <div
                    className={styles.cardIcon} 
                    dangerouslySetInnerHTML={{__html: require("../images/email-r.svg?include")}}>
                  </div>
                  <h3>Send an email</h3>
                </div>
              </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      {/** TODO: Maybe add a footer? */}
      </footer>
    </Layout>
  )
}