import React from 'react'
import { CookieMascot } from '../CookieMascot'
import { Button } from '../Button'

const StepIntro = ({ setCurrentStep }) => {
  const onClick = () => setCurrentStep(1)

  return (
    <li>
      <CookieMascot mood="welcome">
        <div>
          <span className="title">Hi there Chef,</span>
          <div>
            Rice to meet ya! My name is <strong>CookAI</strong>. Looking for a
            delicious inspiration, fresh ideas or just want to turn yer
            leftovers into yummy dishes or snacks? I&apos;m yer lil'
            cookie-buddy. Just click the button over here to get started.
          </div>
        </div>

        <Button onClick={onClick}>Let&apos;s start cooking up a recipe!</Button>
      </CookieMascot>
    </li>
  )
}

export default StepIntro
