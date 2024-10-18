import React from 'react'
import { CookieMascot } from '../CookieMascot'
import { IngredientsPrompt } from '../IngredientsPrompt'
import { ContentWithMascot } from '../ContentWIthMascot'
import { Button } from '../Button'

const StepIngredients = ({ setCurrentStep, setValues, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const values = e.target
    setValues({
      ingredients: values['input-ingredients'].value,
      extraIngredients: values['input-extras'].value,
    })
    setCurrentStep(2)
  }

  return (
    <li>
      <ContentWithMascot
        hideMascot={Boolean(values.current.ingredients)}
        mascot={(setShowContent) => (
          <CookieMascot>
            <div>
              <span className="title">That is Egg-cellent, Chef!</span>
              <div>
                Start by adding some <strong>ingredients</strong> which
                I&apos;ll use to create an amazin&apos; recipe for ya. Also, let
                me know how many <strong>extra ingredients</strong> should I use
                that aren&apos;t on the list. Let&apos;s just call it my
                personal touch, capiche? Make sure to add{' '}
                <strong>at least three</strong> ingredients. Anything less and
                you&apos;d be pullin&apos; my leg.
              </div>
            </div>
            <Button onClick={setShowContent}>
              Sounds good, let&apos;s roll!
            </Button>
          </CookieMascot>
        )}
      >
        <IngredientsPrompt values={values} handleSubmit={handleSubmit} />
      </ContentWithMascot>
    </li>
  )
}

export default StepIngredients
