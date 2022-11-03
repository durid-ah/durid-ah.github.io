import Head from 'next/head';
import Layout from "../component/shared_components/layout/layout";
import ProjectCard from '../component/project_components/project_card';
import TitleSection from '../component/shared_components/title_section/title_section';
import { getPortfolioData, getProjectMetadata } from '../lib/project_parser';
import Project from '../models/project';

import styles from "../styles/Projects.module.css";
import CenterContent from '../component/shared_components/center_content/center_content';

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
         <Layout>
            <Head>
               <title>Durid&apos;s Portfolio - Resume</title>
               <meta property="og:title" content="Durid's Portfolio" />
               <meta property="og:type" content="website" />
               <meta property="og:url" content="https://durid-ah.github.io/" />
               <meta property="og:description" content="Checkout my hobby projects!" />
               <meta property="og:image" content={"./images/iconmonstr-code-6.svg"} />
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center bg-base-300">
               <CenterContent>
                  <TitleSection title="My Projects" />
                  <section className="p-2 flex flex-col gap-4">
                     <h2 className='card py-2 mb-2 pl-4 bg-base-100 text-3xl w-full text-primary-focus font-medium'>This Website:</h2>
                     <ProjectCard project={portfolioDescription}/>
                  </section>

                  <section className="p-2 flex flex-col gap-4">
                     <h2 className='card py-2 mb-2 pl-4 bg-base-100 text-3xl w-full text-primary-focus font-medium'>This Website:</h2>
                     {
                        projectList.map(item => (
                           <ProjectCard key={item.title} project={item}/>
                        ))
                     }
                  </section>
               </CenterContent>
            </main>
         </Layout>
      </>
   )
}