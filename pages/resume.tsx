import Head from "next/head";
import JobCard from "../component/resume_components/job_card/job_card";
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
            <section className={styles.title}>
               <TitleSection title="My Work History" />
            </section>
            <section className={styles.timelineSection}>
               <div className={styles.timeline}>
                  <div className={styles.container}>
                     <JobCard/>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.content}>
                        <h2>2016</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                     </div>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.content}>
                        <h2>2015</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                     </div>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.content}>
                        <h2>2012</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                     </div>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.content}>
                        <h2>2011</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                     </div>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.content}>
                        <h2>2007</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </Layout>
   )
}