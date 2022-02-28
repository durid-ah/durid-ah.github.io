import styles from "./title_section.module.css";

type TitleProps = {
   title: string
}

export default function TitleSection({title}: TitleProps) {
   return (
      <>
         <div className={styles.imageContainer}>
            <img className={styles.headerImage} 
               src='../images/code-image-luis-gomes-546819.jpg'
               alt='a header image of code by luis gomes'/>
            <div className={styles.imageOverlay}>
               <div className={styles.pageTitle}>
                  <h1>{title}</h1>
               </div>
            </div>
         </div>
      </>
   );
}