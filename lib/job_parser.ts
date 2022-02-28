import {promises as fs} from "fs";
import path from "path";
import { Job } from "../models/job";

const DATA_DIR = '../data';
const JOBS_FILE = 'jobs.json';

export const getJobList = async () => {
   let filePath = path.join(DATA_DIR, JOBS_FILE);
   let dataString = await fs.readFile(filePath, 'utf-8');
   let parsedData: any[] = JSON.parse(dataString);
   console.log(dataString);

   return parsedData.map(data => new Job(data));
}