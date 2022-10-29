import React, { SVGProps } from "react";

type ContactCardProps = {
   href: string,
   SvgIcon: React.FC<SVGProps<SVGSVGElement>>,
   label?: string,
   background: "white" | "purple"
}

export default function ContactCard({href, SvgIcon, label, background}: ContactCardProps) {
   const openLink = () => href != "" ? window.open(href, "_blank", "noreferrer"): "";
   const backgroundStyle = background == "white"? "bg-base-100": "bg-base-200";
   return (
      <div className={`card w-56 shadow-lg ${backgroundStyle}`} onClick={openLink}>
         <div className="card-body items-center">
            <h2 className="card-title text-center text-secondary-content">{label}</h2>
         </div>
         <figure className="px-10 pb-10">
               <SvgIcon/>
         </figure>
      </div>
   )
}