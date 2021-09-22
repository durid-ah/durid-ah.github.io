import { useState } from "react";
import Link from "next/link";
import React from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

const isHomeClicked = (location: NavLocation) => 
   location == NavLocation.Home ? styles.homeButtonClicked : ""; 

export default function Layout({children, location} : LayoutProps) {
   console.log(styles);

   return (
      <>
         <nav className={styles.navbar}>
            <ul>
               <li className={`${styles.homeButton} ${isHomeClicked(location)}`}><Link href="/">Home</Link></li>
               <li><Link href="/">Projects</Link></li>
               <li><Link href="/">Resume</Link></li>
            </ul>
         </nav>
         <div>
            {children}
         </div>
      </>
   );
}