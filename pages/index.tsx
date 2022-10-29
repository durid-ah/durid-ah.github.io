import Head from 'next/head';
import Link from "next/link";

import styles from '../styles/Home.module.css';
import Layout from "../component/shared_components/layout/layout";
import ContactCard from '../component/shared_components/contact_card/contact_card';
import { PROJECT_URL } from '../models/nav_location';

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

      <main className="bg-base-300 overflow-x-hidden flex justify-center">
        <div className="shadow-sm bg-base-200 md:w-2/3 w-full">

          <section id="intro" className={`${styles.intro} bg-base-100 flex md:mb-28 mb-56`}>
                <div className="hero h-full w-4/6 mt-16 mb-20">
                  <div className="sm:items-start items-center w-full hero-content flex flex-col gap-8">
                    <h1 className='w-full text-primary-focus text-3xl font-medium'>Hi, my name&apos;s DURID AHMAD!</h1>
                    <p className='text-xl text-primary-content'>
                      I am a <span className='font-bold'>Software Engineer</span> with
                      experience working with clients of different backgrounds and translating
                      their needs into working solutions.
                      For 2+ years, I have built full-stack applications and integration tools that synchronize
                      data with third-party systems. Feel free to check out my projects or reach out to me.
                    </p>
                    <div className='flex overflow-visible justify-evenly gap-2 w-full'>
                      <button className='btn btn-md btn-outline'>Contact Me</button>
                      <Link href={PROJECT_URL} passHref className='btn btn-md'>
                          Projects <ChevronSvg/>
                      </Link>
                    </div>
                  </div>
                </div>
          </section>

          <section id="skills" className="p-6 bg-base-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-primary-focus">My Skills</h1>
            <div className="flex justify-center flex-wrap w-full gap-14 my-12">
              <ContactCard
                href="" SvgIcon={CSharpSvg} label="C#/.NET" background='purple'/>
              <ContactCard
                href="" SvgIcon={NodeJsSvg} label="node.js" background='purple'/>
              <ContactCard
                href="" SvgIcon={ReactSvg} label="React.js" background='purple'/>
            </div>
          </section>
          
          <section id="contact-me" className="p-6 flex flex-col items-center gap-4">
            <h1 className='text-3xl font-bold text-primary-focus'>Contact Me</h1>
            <div className="text-xl text-primary-content">
              Feel free to reach out to me through LinkedIn or email (preferably LinkedIn), or you can checkout my code on Github
            </div>
            <div className="flex justify-center flex-wrap w-full gap-14 my-12">
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
          </section>
        </div>
      </main>
    </Layout>
  );
}