import Link from "next/link";
import React from "react";
import styles from "./contact_card.module.css";

type ContactCardProps = {
   href: string,
   svgIcon: string,
   label?: string
}

export default function ContactCard({href, svgIcon, label}: ContactCardProps) {
   return (
      <Link href={href}>
         <div className={styles.card}>
           <div
             className={styles.cardIcon} 
             dangerouslySetInnerHTML={{__html: svgIcon}}>
           </div>
           <h3>{label}</h3>                
         </div> 
      </Link>
   )
}