import React from 'react'

import { CookieMascot } from '../CookieMascot'
import { LabelsPrompt } from '../LabelsPrompt'
import { ContentWithMascot } from '../ContentWIthMascot'
import { Button } from '../Button'

const StepLabels = ({ setValues, setCurrentStep, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const values = e.target
    setValues({
      healthLabels: Array.from(values['health'])
        .filter(({ checked }) => checked)
        .map(({ value }) => value),
      dietLabels: Array.from(values['diet'])
        .filter(({ checked }) => checked)
        .map(({ value }) => value),
    })
    setCurrentStep(3)
  }

  return (
    <li>
      <ContentWithMascot
        hideMascot={
          Boolean(
            values.current.healthLabels.length ||
              values.current.dietLabels.length
          ) || Boolean(values.current.ingredients)
        }
        mascot={(showContent) => (
          <CookieMascot>
            <div>
              <span className="title">We&apos;re on a roll, Chef!</span>
              <div>
                Let&apos;s talk about any{' '}
                <strong>dietary or health preferences</strong> I should know
                about before I start comin&apos; up with a recipe. I donut want
                to create aything less than perfect, see? Let me know when yer
                done and I&apos;ll start cookin&apos; up a recipe for ya.
              </div>
            </div>
            <Button onClick={showContent}>Got it, buddy!</Button>
          </CookieMascot>
        )}
      >
        <LabelsPrompt values={values} handleSubmit={handleSubmit} />
      </ContentWithMascot>
    </li>
  )
}

export default StepLabels
