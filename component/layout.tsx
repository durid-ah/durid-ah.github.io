import { useState } from "react";
import Link from "next/link";
import React from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

/**
 * Compares the current location passed into the component
 * to a target location
 * 
 * @param location the current page location
 * @param targetLocation the location that you want to compare it to
 * @returns the navButton clicked style or an empty string
 */
const isPageClicked = (location: NavLocation, targetLocation: NavLocation) => 
   location == targetLocation ? styles.navButtonClicked : ""; 

export default function Layout({children, location} : LayoutProps) {
   // when one of the the page links is clicked it will assign it the clicked
   // class to that button adn clears it from the others
   const homeClickedStyle = isPageClicked(location, NavLocation.Home);
   const projectClickedStyle = isPageClicked(location, NavLocation.Projects);
   const resumeClickedStyle = isPageClicked(location, NavLocation.Resume);
   
   return (
      <>
         <nav className={styles.navbar}>
            <ul>
               <li className={`${styles.navButton} ${homeClickedStyle}`}>
                  <Link href="/">Home</Link>
               </li>
               <li className={`${styles.navButton} ${projectClickedStyle}`}>
                  <Link href="/">Projects</Link>
               </li>
               <li className={`${styles.navButton} ${resumeClickedStyle}`}>
                  <Link href="/">Resume</Link>
               </li>
            </ul>
         </nav>
         <div>
            {children}
         </div>
      </>
   );
}