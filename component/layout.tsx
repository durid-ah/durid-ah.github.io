import React, {useState} from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";
import { AppNav, AppMenu } from "./app_links";

import {default as MenuSvg} from '../images/menu-m.svg';

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

export default function Layout({children, location} : LayoutProps) {
   const [show, setShow] = useState(false);

   return (
      <>
         <nav className={styles.navbar}>
            <div className={styles.portfolioTitle}>Durid's Portfolio</div>
            <AppNav location={location}/>
            <div
               className={styles.menuIcon}
               onClick={() => setShow(!show)}>
                  <MenuSvg />
            </div>
         </nav>
         {
            show &&
            <div className={styles.mobileNav}>
               <AppMenu location={location} />
            </div>
         }
         {children}
      </>
   );
}