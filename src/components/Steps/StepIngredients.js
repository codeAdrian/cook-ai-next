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
              <div className="title">That is Egg-cellent, Chef!</div>
              <div>
                Next, let&apos;s add a few <strong>ingredients</strong> which
                will help me create an amazin&apos; recipe for ya. Also, let me
                know how many <strong>additional ingredients</strong> should I
                use that aren&apos;t on yer list. Let&apos;s just call it my
                personal touch, capiche? Make sure to add{' '}
                <strong>at least three</strong> ingredients. Anything less and
                you&apos;d be pullin&apos; my leg.
              </div>
            </div>
            <Button onClick={setShowContent}>Got it, buddy!</Button>
          </CookieMascot>
        )}
      >
        <IngredientsPrompt values={values} handleSubmit={handleSubmit} />
      </ContentWithMascot>
    </li>
  )
}

export default StepIngredients
