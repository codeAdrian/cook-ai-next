import React from 'react'

import styles from './StepsIndicator.module.css'

const StepsIndicator = ({ maxSteps, currentStep, onClick }) => {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.title}>CookAI&apos;s Recipe Magic</h1>
      <nav className={styles.inner}>
        <ul className={styles.list}>
          {[...new Array(maxSteps)].map((_, i) => (
            <li
              className={i < currentStep ? styles.itemCompleted : styles.item}
              key={`step-${i}`}
            >
              <button
                value={i}
                disabled={i >= currentStep}
                className={
                  i === currentStep
                    ? styles.buttonActive
                    : i < currentStep
                      ? styles.buttonCompleted
                      : styles.button
                }
                onClick={onClick}
              >
                <span className="sr-only">Step {i + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default StepsIndicator
