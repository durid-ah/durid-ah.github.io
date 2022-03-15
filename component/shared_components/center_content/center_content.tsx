import styles from './center_content.module.css';

export default function CenterContent({children}) {
   return (
      <section className={styles.centerContent}>
         {children}
      </section>
   )
}