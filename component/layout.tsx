import { useState } from "react";
import Link from "next/link";
import React from "react";
import { NavLocation } from "../models/nav_location";

type LayoutProps = {
   children?: React.ReactNode,
   location: NavLocation
}

export default function Layout({children} : LayoutProps) {

   return (
      <>
         <nav className="navbar">
            <ul>
               <li><Link href="">Home</Link></li>
               <li><Link href="">Projects</Link></li>
               <li><Link href="">Resume</Link></li>
            </ul>
         </nav>
         <div>
            {children}
         </div>
      </>
   );
}