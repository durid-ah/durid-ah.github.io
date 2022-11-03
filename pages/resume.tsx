import Head from "next/head";
import JobCard from "../component/resume_components/job_card/job_card";
import CenterContent from "../component/shared_components/center_content";
import Layout from "../component/shared_components/layout/layout";
import TitleSection from "../component/shared_components/title_section/title_section";
import { getJobList } from "../lib/job_parser";
import Job from "../models/job";

import styles from "../styles/Resume.module.css";

export async function getStaticProps() {
   return { props: { jobList: await getJobList() }}
}

type ResumeProps = {
   jobList: Job[]
}

export default function Resume({jobList}: ResumeProps) {
   return (
      <Layout>
         <Head>
            <title>Durid&apos;s Portfolio - Projects</title>
            <meta property="og:title" content="Durid's Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://durid-ah.github.io/" />
            <meta property="og:description" content="Checkout my hobby projects!" />
            <meta property="og:image" content={"./images/iconmonstr-code-6.svg"} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex flex-col items-center bg-base-300">
            <CenterContent>
               <TitleSection title="My Work History" />

               <section className="bg-base-100 p-4 mb-2">
                  <h2 className='card py-2 mb-2 pl-4 bg-base-100 text-3xl w-full text-primary-focus font-medium'>
                     My work history starting from the most recent to the oldest.
                  </h2>
               </section>
               <section id="timeline-section">
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