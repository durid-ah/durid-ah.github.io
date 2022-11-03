
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
            <h2 className="text-xl inline-flex items-baseline flex-wrap"> 
               <span className="text-primary-content font-medium">{position}</span> 
               <span className={styles.time}>{timeDiff.toString()}</span>
            </h2>
            <h3 className="text-lg text-secondary-content">{company} ({location})</h3>
            <ul>
               {descriptions.map(desc => (<li className="text-base" key={desc}>{desc}</li>))}
            </ul>
         </div>
      </div>
   );
}