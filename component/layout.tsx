import React, {useState} from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";
import { AppNav, AppMenu } from "./app_links";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

export default function Layout({children, location} : LayoutProps) {
   const [show, setShow] = useState(false);

   return (
      <div className={styles.screen}>
         <nav className={styles.navbar}>
            <div className={styles.portfolioTitle}>Durid's Portfolio</div>
            <AppNav location={location}/>
            <div
               className={styles.menuIcon}
               onClick={() => setShow(!show)}
               dangerouslySetInnerHTML={{__html: require("../images/menu-m.svg?include")}} />
         </nav>
         {
            show &&
            <div className={styles.mobileNav}>
               <AppMenu location={location} />
            </div>
         }
         {children}
      </div>
   );
}