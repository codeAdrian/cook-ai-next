import React, { useEffect, useRef, useState } from 'react'
import { CookieMascot } from '../CookieMascot'
import { Recipe } from '../Recipe'
import { createPrompt } from '@/utils/createPrompt'
import dynamic from 'next/dynamic'
import { triggerEmojiBlast } from '@/utils/triggerEmojiBlast'

const RecipeControls = dynamic(
  () => import('../RecipeControls/RecipeControls'),
  {
    ssr: false,
  }
)

const StepResult = ({ promptModel, values, ...props }) => {
  const recipeRef = useRef()
  const [response, setResponse] = useState('')
  const isDisabled = props.promptState !== 'success'

  const runQuery = () => {
    promptModel(createPrompt(values.current), setResponse)
  }

  useEffect(runQuery, [])

  useEffect(() => {
    if (isDisabled || !response) {
      return
    }

    triggerEmojiBlast()
  }, [isDisabled, response])

  useEffect(() => {
    if (!response) {
      return
    }

    recipeRef.current.scrollTop = recipeRef.current.scrollHeight
  }, [response])

  return (
    <li>
      <RecipeControls {...props} runQuery={runQuery} isDisabled={isDisabled} />
      <CookieMascot
        onClick={() => !isDisabled && triggerEmojiBlast()}
        mood={isDisabled ? 'idle' : 'happy'}
      >
        <div ref={recipeRef} className="formatted">
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
