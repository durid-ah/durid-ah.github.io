import { type } from "os";
import { Project } from "../models/project";
import styles from "./project_card.module.css";
import TechChip from "./tech_chip";

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
                     text => (<TechChip text={text} />))
               }
            </span>
         </p>
         <hr/>
      </div>
   )
}

export default ProjectCard; 