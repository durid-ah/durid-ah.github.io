import React, { SVGProps } from "react";
import styles from "./contact_card.module.css";

type ContactCardProps = {
   href: string,
   SvgIcon: React.FC<SVGProps<SVGSVGElement>>,
   label?: string,
   background: "white" | "purple"
}

export default function ContactCard({href, SvgIcon, label, background}: ContactCardProps) {
   const openLink = () => href != "" ? window.open(href, "_blank", "noreferrer"): "";
   const backgroundStyle = background == "white"? styles.whiteBackground: styles.purpleBackground;
   return (
      <div className={`${styles.card} ${backgroundStyle}`} onClick={openLink}>
         <div className={styles.cardIcon}>
               <SvgIcon/>
         </div>
        <h3>{label}</h3>
      </div>
   )
}