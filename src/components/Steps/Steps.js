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

const stepComponents = [StepIntro, StepIngredients, StepLabels, StepResult]

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleStepNavigation = (e) => {
    setCurrentStep(parseInt(e.currentTarget.value))
  }

  const formValues = useRef({
    ingredients: '',
    extraIngredients: '',
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
      <StepError>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(error),
          }}
        />
      </StepError>
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
        className={
          currentStep === stepComponents.length - 1
            ? styles.listWide
            : styles.list
        }
        role="list"
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
