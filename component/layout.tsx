import { useState } from "react";
import Link from "next/link";
import React from "react";

import { NavLocation } from "../models/nav_location";
import styles from "./layout.module.css";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

export default function Layout({children} : LayoutProps) {

   return (
      <>
         <nav className={styles.navbar}>
            <ul>
               <li><Link href="/">Home</Link></li>
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