import {promises as fs} from "fs";
import path from "path";
import matter from "gray-matter";
import Project from "../models/project";

const projectsPath = path.join(process.cwd(), 'projects');
const PORTFOLIO_FILE = "portfolio.md";

export const getProjectMetadata = async () => {
   const fileNames = await fs.readdir(projectsPath);
   const projects: Promise<Project>[] = fileNames
      .filter(fn => fn != PORTFOLIO_FILE)
      .map(
         async fileName => {
            const filePath = path.join(projectsPath, fileName);
            const data = await fs.readFile(filePath, 'utf-8');
            const metadata = matter(data).data;

            return toProjectType(metadata);
         }
      );

   return Promise.all(projects);
}

export const getPortfolioData = async (): Promise<Project> => {
   const filePath = path.join(projectsPath, PORTFOLIO_FILE);
   const data = await fs.readFile(filePath, 'utf-8');
   const metadata = matter(data).data;

   return toProjectType(metadata);
}

const toProjectType = (metadata: {[key:string]: any}): Project => {
   return {
      title: metadata["title"],
      description: metadata["description"],
      technologies: metadata["technologies"].split(",")
   }
}