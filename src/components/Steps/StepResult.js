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

const StepResult = ({
  generateRecipe,
  values,
  promptState,
  recipe,
  ...props
}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const recipeRef = useRef()
  const contentRef = useRef()
  const isDisabled = promptState !== PROMPT_STATE.success

  const handleSuccess = () =>
    import('../../utils/triggerEmojiBlast.js').then(({ triggerEmojiBlast }) =>
      triggerEmojiBlast()
    )

  const runQuery = async () => {
    try {
      setIsEditMode(false)
      await generateRecipe(values.current)

      // Preload emoji-blast module while processing the query
      import('../../utils/triggerEmojiBlast.js')
    } catch (error) {
      console.error('Error generating recipe:', error)
    }
  }

  useEffect(() => {
    // IIFE (Immediately Invoked Function Expression) to handle async
    ;(async () => {
      await runQuery()
    })()
  }, []) // Empty dependency array for initial run only

  useEffect(() => {
    if (isDisabled || !recipe) {
      return
    }

    handleSuccess()
  }, [isDisabled, recipe])

  useEffect(() => {
    if (!recipe) {
      return
    }

    recipeRef.current.scrollTop = recipeRef.current.scrollHeight
  }, [recipe])

  const toggleEditMode = () => setIsEditMode((v) => !v)

  useEffect(() => {
    if (!isEditMode || !contentRef.current || !recipe || isDisabled) {
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
          {recipe ? (
            <Recipe
              contentRef={contentRef}
              isEditMode={isEditMode}
              response={recipe}
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
