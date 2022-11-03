import Project from "../../../models/project";
import TechChip from "../tech_chip/tech_chip";

import { default as GitHubSvg } from "../../../images/iconmonstr-github-2.svg";
import React from "react";

type ProjectCardProps = {
   project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
   return (
      <div className="p-4 card flex flex-col bg-base-100 gap-8">
         <h3 className="bg-base-100 text-2xl w-full text-secondary-content font-medium">{project.title}</h3>
         <p className="text-xl">
            {project.description}
         </p>
         <p className="text-xl">
            <span className="text-secondary-content font-bold">Technologies Used:</span>
            <span className="inline-flex flex-wrap gap-2 ml-2 font-medium">
               {
                  project.technologies.map(
                     text => (<TechChip key={text} text={text} />))
               }
            </span>
         </p>
         <div className="flex justify-end">
            {
               project.github && 
               <a href={project.github} target="_blank" className="badge badge-secondary gap-2 p-4">
                  <div className="rounded-full overflow-hidden">
                     <GitHubSvg height={24} width={24}/>
                  </div>
                  GitHub Repo
               </a>
            }
         </div>
      </div>
   )
}

export default ProjectCard;