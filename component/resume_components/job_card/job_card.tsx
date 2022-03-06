
import { useState } from "react";
import Job from "../../../models/job";
import { TimeDiff } from "./job_card.model";
import styles from "./job_card.module.css";

export default function JobCard({position, company, location, descriptions, startDate, endDate}: Job) {
   const parsedEndDate = endDate ? new Date(endDate): new Date();
   const [timeDiff, _] = useState(new TimeDiff(new Date(startDate), parsedEndDate))

   return (
         <div className={styles.container}>
         <div className={styles.content}>
            <h2> <span>{position}</span> <span className={styles.time}>{timeDiff.toString()}</span></h2>
            <h3>{company} ({location})</h3>
            <ul>
               {descriptions.map(desc => (<li key={desc}>{desc}</li>))}
            </ul>
         </div>
      </div>
   );
}