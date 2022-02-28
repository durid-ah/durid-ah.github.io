import styles from "./tech_chip.module.css"

type ChipProps = {
   text: string
}

export default function TechChip({text}: ChipProps) {
   return (
      <span className={styles.chipSpan}>#{text}</span>
   )
}