import React from 'react'

import styles from './Recipe.module.css'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

const Recipe = ({ response }) => {
  return (
    <div
      className={styles.recipe}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(response)),
      }}
    />
  )
}

export default Recipe
