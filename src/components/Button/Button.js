import React from 'react'

import styles from './Button.module.css'

const Button = ({ children, variant = 'cta', ...props }) => {
  return (
    <button {...props} className={styles[variant]}>
      <span>{children}</span>
    </button>
  )
}

export default Button
