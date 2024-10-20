import React from 'react'

import styles from './Input.module.css'

const Input = ({ inputRef, ...props }) => {
  return <input {...props} ref={inputRef} className={styles.input} />
}

export default Input
