import Head from 'next/head';
import Layout from "../component/layout";
import ProjectCard from '../component/project_card';
import { getPortfolioData, getProjectMetadata } from '../lib/project_parser';
import { NavLocation } from "../models/nav_location";
import Project from '../models/project';

import styles from "../styles/Projects.module.css";

const headerImage = require('../images/code-image-luis-gomes-546819.jpg').default;

export async function getStaticProps() {
   const projectList = await getProjectMetadata();
   const portfolioDescription = await getPortfolioData();
   return {
      props: {
         projectList,
         portfolioDescription
      }
   }
}

type ProjectProps = {
   projectList: Project[],
   portfolioDescription: Project
}


export default function Projects({projectList, portfolioDescription}: ProjectProps) {

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
               <div className={styles.imageContainer}>
                  <img className={styles.headerImage} src={headerImage.src}/>
                  <div className={styles.imageOverlay}>
                     <div className={styles.pageTitle}>
                        <h1>My Projects:</h1>
                     </div>
                  </div>
               </div>
               <div className={styles.centerContent}>
                  <h2>This Project:</h2>
                  <ProjectCard project={portfolioDescription}/>
                  <h2>Other Projects:</h2>
                  {
                     projectList.map(item => (
                        <ProjectCard key={item.title} project={item}/>
                     ))
                  }
               </div>
            </main>
         </Layout>
      </>
   )
}