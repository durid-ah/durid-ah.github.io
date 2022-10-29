import React from "react";

import { PROJECT_URL, RESUME_URL } from "../../../models/nav_location";
import styles from "./layout.module.css";

import {default as MenuSvg} from '../../../images/menu-m.svg';
import Link from "next/link";

type LayoutProps = {
   children?: React.ReactNode,
}

export default function Layout({ children } : LayoutProps) {
   return (
      <>
         <nav className="navbar bg-neutral text-neutral-content">
            <div className={`${styles.portfolioTitle} navbar-start normal-case text-3xl`}>
               Durid's Portfolio
            </div>
            <div className="navbar-end hidden lg:flex text-2xl">
               <ul className="menu menu-horizontal p-0">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href={PROJECT_URL}>Projects</Link></li>
                  <li><Link href={RESUME_URL}>Résumé</Link></li>
               </ul>
            </div>
            <div className="navbar-end lg:hidden">
               <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <MenuSvg />
                  </label>
                  <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <li><Link href="/">Home</Link></li>
                     <li><Link href={PROJECT_URL}>Projects</Link></li>
                     <li><Link href={RESUME_URL}>Résumé</Link></li>
                  </ul>
               </div>
            </div>
         </nav>
         {children}

         <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
            <div><p className="p-2">Logos were provided by <a className="underline" target="_blank" rel="noreferrer" href="https://iconmonstr.com">iconmonstr</a></p></div>
         </footer>
      </>
   );
}