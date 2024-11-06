import React, { useEffect, useRef, useState } from 'react'
import { CookieMascot } from '../CookieMascot'
import { Recipe } from '../Recipe'
import { createPrompt } from '@/utils/createPrompt'
import dynamic from 'next/dynamic'

import { RecipeButtons } from '../RecipeButtons'
import { PROMPT_STATE } from '@/constants/promptState'

const RecipeControls = dynamic(
  () => import('../RecipeControls/RecipeControls'),
  {
    ssr: false,
  }
)

const StepResult = ({ promptModel, values, ...props }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const recipeRef = useRef()
  const contentRef = useRef()
  const [response, setResponse] = useState('')
  const isDisabled = props.promptState !== PROMPT_STATE.success

  const handleSuccess = () =>
    import('../../utils/triggerEmojiBlast.js').then(({ triggerEmojiBlast }) =>
      triggerEmojiBlast()
    )

  const runQuery = () => {
    setIsEditMode(false)
    promptModel(createPrompt(values.current), setResponse)

    // Preload emoji-blast module while Gemini is processing the query
    import('../../utils/triggerEmojiBlast.js')
  }

  useEffect(runQuery, [])

  useEffect(() => {
    if (isDisabled || !response) {
      return
    }

    handleSuccess()
  }, [isDisabled, response])

  useEffect(() => {
    if (!response) {
      return
    }

    recipeRef.current.scrollTop = recipeRef.current.scrollHeight
  }, [response])

  const toggleEditMode = () => setIsEditMode((v) => !v)

  useEffect(() => {
    if (!isEditMode || !contentRef.current || !response || isDisabled) {
      return
    }

    contentRef.current?.focus()
  }, [isEditMode])

  return (
    <li>
      <RecipeControls {...props} runQuery={runQuery} isDisabled={isDisabled} />
      <RecipeButtons
        toggleEditMode={toggleEditMode}
        isDisabled={isDisabled}
        isEditMode={isEditMode}
      />
      <CookieMascot
        onClick={() => !isDisabled && handleSuccess()}
        mood={isDisabled ? 'idle' : 'happy'}
      >
        <div ref={recipeRef} className="formatted">
          {response ? (
            <Recipe
              contentRef={contentRef}
              isEditMode={isEditMode}
              response={response}
            />
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
