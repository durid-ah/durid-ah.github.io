import {promises as fs} from "fs";
import path from "path";
import Job, { toJobType } from "../models/job";

const DATA_DIR = './data';
const JOBS_FILE = 'jobs.json';

export const getJobList = async (): Promise<Job[]> => {
   let filePath = path.join(DATA_DIR, JOBS_FILE);
   let dataString = await fs.readFile(filePath, 'utf-8');
   let parsedData: any[] = JSON.parse(dataString);

   return parsedData.map(data => toJobType(data));
}

