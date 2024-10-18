import React, { useEffect, useState } from 'react'
import { CookieMascot } from '../CookieMascot'
import { Recipe } from '../Recipe'
import { createPrompt } from '@/utils/createPrompt'
import { Button } from '../Button'

const StepResult = ({ promptModel, values }) => {
  const [response, setResponse] = useState('')
  const onPrint = () => window.print()

  useEffect(() => {
    promptModel(createPrompt(values.current), setResponse)
  }, [])

  return (
    <li>
      <div>
        <Button type="button" onClick={onPrint}>
          Print
        </Button>
        <Button>Edit ingredients</Button>
      </div>
      <CookieMascot mood="happy">
        <div className="formatted">
          {response ? (
            <Recipe response={response} />
          ) : (
            <>
              <div className="title">
                I&apos;m cookin up a recipe here, Chef!
              </div>
              <div>
                Just give me a few seconds and I&apos;ll have something for ya.
              </div>
            </>
          )}
        </div>
      </CookieMascot>
    </li>
  )
}

export default React.memo(StepResult)
