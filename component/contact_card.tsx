import React, { SVGProps } from "react";
import styles from "./contact_card.module.css";

type ContactCardProps = {
   href: string,
   SvgIcon: React.FC<SVGProps<SVGSVGElement>>,
   label?: string
}

export default function ContactCard({href, SvgIcon, label}: ContactCardProps) {
   const openLink = () => window.open(href, "_blank", "noreferrer")
   return (
      <div className={styles.card} onClick={openLink}>
         <div className={styles.cardIcon}>
               <SvgIcon/>
         </div>
        <h3>{label}</h3>
      </div>
   )
}