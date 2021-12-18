import React from "react";
import styles from "./contact_card.module.css";

type ContactCardProps = {
   href: string,
   svgIcon: string,
   label?: string
}

export default function ContactCard({href, svgIcon, label}: ContactCardProps) {
   const openLink = () => window.open(href, "_blank", "noreferrer")
   return (
      <div className={styles.card} onClick={openLink}>
         <div
           className={styles.cardIcon}
           dangerouslySetInnerHTML={{__html: svgIcon}}>
         </div>
        <h3>{label}</h3>
      </div>
   )
}