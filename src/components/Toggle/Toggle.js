import React from 'react'

import styles from './Toggle.module.css'

const Toggle = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={`sr-only ${styles.checkbox}`}
        {...props}
      />
      <div role="presentation" className={styles.toggle} htmlFor={props.id}>
        <span className={styles.switch} />
      </div>
    </div>
  )
}

export default Toggle
