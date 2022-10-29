import styles from "./title_section.module.css";

type TitleProps = {
   title: string
}

export default function TitleSection({title}: TitleProps) {
   return (
      <>
         <div className="hero h-96 overflow-hidden" style={{ backgroundImage: `url("../images/code-image-luis-gomes-546819.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{title}</h1>
               </div>
            </div>

            {/* <img className={styles.headerImage} 
               src='../images/code-image-luis-gomes-546819.jpg'
               alt='a header image of code by luis gomes'/> */}
            {/* <div className={styles.imageOverlay}>
               <div className={styles.pageTitle}>
                  <h1>{title}</h1>
               </div>
            </div> */}
         </div>
      </>
   );
}