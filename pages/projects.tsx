import Head from 'next/head';
import Layout from "../component/layout";
import ProjectCard from '../component/project_card';
import TechChip from '../component/tech_chip';
import { NavLocation } from "../models/nav_location";
import { Project } from '../models/project';

import styles from "../styles/Projects.module.css";

export default function Projects() {
   const data = ["Next.js", "Node.js", "Github Actions", "Next.js", "Node.js", "Github Actions", "Next.js", "Node.js", "Github Actions", "Next.js", "Node.js", "Github Actions", "Next.js", "Node.js", "Github Actions"];
   const projectData: Project[] = [{
      title: "Some Programming Project",
      description: 
         `This will contain a very long description about how this project was set up
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      technologies: ["Next.js", "Node.js", "Github Actions"]
   },
   {
      title: "Some Programming Project",
      description: 
         `This will contain a very long description about how this project was set up
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      technologies: ["Next.js", "Node.js", "Github Actions"]
   },
   {
      title: "Some Programming Project",
      description: 
         `This will contain a very long description about how this project was set up
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      technologies: ["Next.js", "Node.js", "Github Actions"]
   }]
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
                  <div className={styles.pageTitle}>
                     <h1>My Projects:</h1>
                  </div>
                  <h2>This Project:</h2>
                  <div className={styles.currentProject}>
                     <p className={styles.projectDescription}>
                        This will contain a very long description about how this project was set up
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                     <p className={styles.projectDescription}><span>Technologies Used:</span> <span className={styles.chips}>{data.map(text => (<TechChip text={text} />))}</span></p>
                     <hr/>
                  </div>
                  <h2>Other Projects:</h2>
                  {
                     projectData.map(item => (
                        <ProjectCard project={item}/>
                     ))
                  }

               </div>
            </main>
         </Layout>
      </>
   )
}