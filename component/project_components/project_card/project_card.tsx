import Project from "../../../models/project";
import TechChip from "../tech_chip/tech_chip";

import styles from "./project_card.module.css";
import { default as GitHubSvg } from "../../images/iconmonstr-github-2.svg";
import React from "react";

type ProjectCardProps = {
   project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
   return (
      <div className={styles.currentProject}>
         <h3>{project.title}</h3>
         <p className={styles.projectDescription}>
            {project.description}
         </p>
         <p className={styles.projectDescription}>
            <span>Technologies Used:</span>
            <span className={styles.chips}>
               {
                  project.technologies.map(
                     text => (<TechChip key={text} text={text} />))
               }
            </span>
         </p>
         <div className={styles.projectLinks}>
            {
               project.github && 
               <a href={project.github} target="_blank" className={styles.link}>
                  <div className={styles.linkImage}>
                     <GitHubSvg height={24} width={24}/>
                  </div>
                  <div className={styles.label}>
                     GitHub Repo
                  </div>
               </a>
            }
         </div>
      </div>
   )
}

export default ProjectCard;