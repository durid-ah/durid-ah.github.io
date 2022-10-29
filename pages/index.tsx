import Head from 'next/head';
import Link from "next/link";

import styles from '../styles/Home.module.css';
import Layout from "../component/shared_components/layout/layout";
import ContactCard from '../component/shared_components/contact_card/contact_card';
import { NavLocation, PROJECT_URL } from '../models/nav_location';

import { default as ChevronSvg } from "../images/chevron-right-m.svg";
import { default as LinkedInSvg } from "../images/iconmonstr-linkedin-2.svg";
import { default as EmailSvg } from "../images/iconmonstr-email-3.svg";
import { default as GitHubSvg } from "../images/iconmonstr-github-2.svg";
import { default as CSharpSvg } from "../images/c_sharp.svg";
import { default as NodeJsSvg } from "../images/node_js.svg";
import { default as ReactSvg } from "../images/react.svg";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Durid&apos;s Portfolio - Home Page</title>
          <meta property="og:title" content="Durid's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://durid-ah.github.io/" />
          <meta property="og:description" content="Checkout my projects and work experience" />
          <meta property="og:image" content="./images/iconmonstr-code-6.svg" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <section>
            <div className={`${styles.introWrapper} w-full flex`}>
              <div className={styles.intro}>
                <div className={styles.content}>
                  <div className={`${styles.paragraph} flex flex-col gap-8`}>
                    <h1 className='text-primary-focus text-2xl font-medium'>Hi, my name&apos;s DURID AHMAD!</h1>
                    <p className='text-xl'>
                      I am a <span className='font-bold'>Software Engineer</span> with
                      experience working with clients of different backgrounds and translating
                      their needs into working solutions.
                      For 2+ years, I have built full-stack applications and integration tools that synchronize
                      data with third-party systems. Feel free to check out my projects or reach out to me.
                    </p>
                    <div className='flex overflow-visible justify-evenly gap-2'>
                      <button className='btn btn-md btn-outline'>Contact Me</button>
                      <Link href={PROJECT_URL} passHref className='btn btn-md'>
                        {/* <button > */}
                          Projects
                          {/* <div className={styles.chevronIcon}> */}
                            <ChevronSvg/>
                          {/* </div> */}
                        {/* </button> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.skills}>
            <h1>My Skills</h1>
            <div className={styles.cardRow}>
              <ContactCard
                href="" SvgIcon={CSharpSvg} label="C#/.NET" background='purple'/>
              <ContactCard
                href="" SvgIcon={NodeJsSvg} label="node.js" background='purple'/>
              <ContactCard
                href="" SvgIcon={ReactSvg} label="React.js" background='purple'/>
            </div>
          </section>
          <div className={styles.contactMe}>
            <h1>Contact Me</h1>
            <div className={styles.description}>
              Feel free to reach out to me through LinkedIn or email (preferably LinkedIn), or you can checkout my code on Github
            </div>
            <div className={styles.cardRow}>
              <ContactCard
                href="https://www.linkedin.com/in/durid-ahmad/"
                SvgIcon={LinkedInSvg}
                label="Send Me A DM"
                background='white' />
              <ContactCard
                href="mailto:ahmad.durid.dev@gmail.com"
                SvgIcon={EmailSvg}
                label="Send Me An Email"
                background='white' />
              <ContactCard
                href="https://github.com/durid-ah"
                SvgIcon={GitHubSvg}
                label="View My Code"
                background='white' />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}