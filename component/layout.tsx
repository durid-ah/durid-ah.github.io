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
      <div className={styles.container}>
         <nav className={styles.navbar}>
            <AppLinks location={location}/>
         </nav>
         <div>
            {children}
         </div>
      </div>
   );
}