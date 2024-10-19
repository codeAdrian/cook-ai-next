import React from 'react'
import { CookieMascot } from '../CookieMascot'
import { Button } from '../Button'
import { ContentWithMascot } from '../ContentWIthMascot'
import { DishTypeInput } from '../DishTypeInput'

const StepIntro = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const values = e.target

    props.setValues({
      dishType: Array.from(values['dish-type']).find(({ checked }) => checked)
        ?.value,
    })
    props.setCurrentStep(1)
  }

  return (
    <li>
      <ContentWithMascot
        mascot={(setShowContent) => (
          <CookieMascot mood="welcome">
            <div>
              <div className="title">Hi there Chef,</div>
              <div>
                Rice to meet ya! My name is <strong>CookAI</strong>. Looking for
                a delicious inspiration, fresh ideas or just want to turn yer
                leftovers into yummy dishes or snacks? I&apos;m yer buddy.
                Let&apos;s start by selecting the type of dish you want us to
                create.
              </div>
            </div>

            <Button onClick={setShowContent}>Got it, buddy!</Button>
          </CookieMascot>
        )}
      >
        <DishTypeInput {...props} onSubmit={handleSubmit} />
      </ContentWithMascot>
    </li>
  )
}

export default StepIntro
