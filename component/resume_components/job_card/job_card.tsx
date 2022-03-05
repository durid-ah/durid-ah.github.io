
import Job from "../../../models/job";
import styles from "./job_card.module.css";

export default function JobCard({position, company, location, descriptions, endDate}: Job) {
   const end = endDate ?? new Date();

   return (
         <div className={styles.container}>
         <div className={styles.content}>
            <h2>{position}</h2>
            <h3>{company} ({location})</h3>
            <ul>
               {descriptions.map(desc => (<li key={desc}>{desc}</li>))}
            </ul>
         </div>
      </div>
   );
}