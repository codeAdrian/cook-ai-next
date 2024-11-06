import React from 'react'
import { Button } from '../Button'

import styles from './RecipeButtons.module.css'

const RecipeButtons = ({ toggleEditMode, isDisabled, isEditMode }) => {
  return (
    <nav className={styles.wrapper}>
      <Button
        onClick={toggleEditMode}
        variant={isEditMode ? 'outline-cta' : 'outline'}
        disabled={isDisabled}
      >
        {isEditMode ? 'Discard changes' : 'Edit recipe text'}
      </Button>

      <div className={isDisabled ? styles.iconRotate : styles.loadingIndicator}>
        🍪
      </div>
    </nav>
  )
}

export default RecipeButtons
