"use client";

import styles from "./HandwritingSheet.module.css";

// TODO: always use arrow functions when creating react components. We should update the AGENTS.md file with that information.

export function HandwritingSheet() {
  return (
      <div className={styles.sheetCard} >
        <div className={styles.sheetCardHeader}>Header Goes Here</div>
        <div className={styles.lauda}>Repeated Text Goes Here and the lines etc etc</div>
      </div>
  )
}