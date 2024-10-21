'use client'

import React, { useRef, useState } from 'react'

import StepError from './StepError'
import DOMPurify from 'dompurify'

import { usePromptModelValues } from '@/contexts/PromptModelContext'

import styles from './Steps.module.css'

import StepLabels from './StepLabels'
import StepResult from './StepResult'
import StepIntro from './StepIntro'
import StepIngredients from './StepIngredients'
import { StepsIndicator } from '../StepsIndicator'
import { dishTypeOptions } from '@/constants/dishTypeOptions'

const stepComponents = [StepIntro, StepIngredients, StepLabels, StepResult]

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleStepNavigation = (e) => {
    setCurrentStep(parseInt(e.currentTarget.value))
  }

  const formValues = useRef({
    dishType: dishTypeOptions[0].value,
    ingredients: '',
    extraIngredients: 5,
    healthLabels: [],
    dietLabels: [],
  })

  const { error, ...promptState } = usePromptModelValues()
  const CurrentStep = stepComponents[currentStep]

  const setValues = (v) => {
    formValues.current = { ...formValues.current, ...v }
  }

  if (error) {
    return (
      <div className={styles.list}>
        <StepError>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(error),
            }}
          />
        </StepError>
      </div>
    )
  }

  return (
    <>
      <StepsIndicator
        onClick={handleStepNavigation}
        maxSteps={4}
        currentStep={currentStep}
      />

      <ul
        role="list"
        className={
          currentStep === stepComponents.length - 1
            ? styles.listWide
            : styles.list
        }
      >
        <CurrentStep
          values={formValues}
          setValues={setValues}
          setCurrentStep={setCurrentStep}
          {...promptState}
        />
      </ul>
    </>
  )
}

export default Steps
