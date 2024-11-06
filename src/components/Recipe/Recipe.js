import React from 'react'

import styles from './Recipe.module.css'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

const Recipe = ({ response, isEditMode, contentRef }) => {
  return (
    <div
      ref={contentRef}
      contentEditable={isEditMode}
      className={styles.recipe}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(response)),
      }}
    />
  )
}

export default Recipe
