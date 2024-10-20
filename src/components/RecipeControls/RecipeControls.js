import React from 'react'
import { Button } from '../Button'

import styles from './RecipeControls.module.css'
import { Printer, RotateCcw, SquarePen, WandSparkles } from 'lucide-react'

const RecipeControls = ({ setCurrentStep, runQuery, isDisabled = true }) => {
  const onPrint = () => window.print()
  const onRestart = () => window.location.reload()
  const onEdit = () => {
    setCurrentStep(0)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <Button disabled={isDisabled} type="button" onClick={onPrint}>
          <Printer />
          <span className="sr-only">Print</span>
        </Button>
        <Button disabled={isDisabled} onClick={onEdit}>
          <SquarePen />
          <span className="sr-only">Edit ingredients</span>
        </Button>

        <Button disabled={isDisabled} type="button" onClick={runQuery}>
          <WandSparkles />
          <span className="sr-only">Re-run query</span>
        </Button>
        <Button disabled={isDisabled} type="button" onClick={onRestart}>
          <RotateCcw />
          <span className="sr-only">Restart from the first step</span>
        </Button>
      </div>
    </div>
  )
}

export default RecipeControls
