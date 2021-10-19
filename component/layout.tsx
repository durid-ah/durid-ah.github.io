import React from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";
import { AppLinks } from "./app_links";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

export default function Layout({children, location} : LayoutProps) {

   return (
      <div>
         <nav className={styles.navbar}>
            <div className={styles.portfolioTitle}>Durid's Portfolio</div>
            <AppLinks className={styles.hideOnMobile} location={location}/>
         </nav>
         <div className={styles.mobileNav}>
            <AppLinks location={location} />
         </div>
         <div>
            {children}
         </div>
      </div>
   );
}