import styles from "./app_links.module.css";
import Link from "next/link";
import { NavLocation } from "../models/nav_location";

type AppLinksProps = {
   location: NavLocation
}

export function AppLinks({location}: AppLinksProps ) {

   // when one of the the page links is clicked it will assign it the clicked
   // class to that button adn clears it from the others
   const homeClickedStyle = isPageClicked(location, NavLocation.Home);
   const projectClickedStyle = isPageClicked(location, NavLocation.Projects);
   const resumeClickedStyle = isPageClicked(location, NavLocation.Resume);
   
   return (
      <>
         <ul className={`${styles.show} ${styles.listContainer}`}>
            <li className={`${styles.navButton} ${homeClickedStyle} ${styles.link}`}>
               <Link href="/">Home</Link>
            </li>
            <li className={`${styles.navButton} ${projectClickedStyle} ${styles.link}`}>
               <Link href="/">Projects</Link>
            </li>
            <li className={`${styles.navButton} ${resumeClickedStyle} ${styles.link}`}>
               <Link href="/">Resume</Link>
            </li>
         </ul>
      </>   
   );
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

