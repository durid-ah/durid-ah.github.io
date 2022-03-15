import Head from "next/head";
import JobCard from "../component/resume_components/job_card/job_card";
import CenterContent from "../component/shared_components/center_content/center_content";
import Layout from "../component/shared_components/layout/layout";
import TitleSection from "../component/shared_components/title_section/title_section";
import { getJobList } from "../lib/job_parser";
import Job from "../models/job";
import { NavLocation } from "../models/nav_location";

import styles from "../styles/Resume.module.css";

export async function getStaticProps() {
   return { props: { jobList: await getJobList() }}
}

type ResumeProps = {
   jobList: Job[]
}

export default function Resume({jobList}: ResumeProps) {
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
            <CenterContent>
               <section className={styles.title}>
                  <TitleSection title="My Work History" />
               </section>
               <section className={styles.intro}>
                  <h2>My work history is listed starting from the most recent to the oldest.</h2>
               </section>
               <section className={styles.timelineSection}>
                  <div className={styles.timeline}>
                     {jobList.map((job, idx) => 
                        ( <JobCard key={idx} {...job} /> ))}
                  </div>
               </section>
            </CenterContent>
         </main>
      </Layout>
   )
}