import React from 'react'

import styles from './SkeletonLoader.module.css'

const SkeletonLoader = (props) => {
  return (
    <div {...props} className={styles.wrapper}>
      <span className="sr-only">Loading component...</span>
    </div>
  )
}

export default SkeletonLoader
