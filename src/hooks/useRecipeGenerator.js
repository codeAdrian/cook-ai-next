import { useState, useCallback } from 'react'
import { createPrompt } from '@/utils/createPrompt'
import { PROMPT_STATE } from '@/constants/promptState'

const useRecipeGenerator = () => {
  const [promptState, setPromptState] = useState(PROMPT_STATE.idle)
  const [error, setError] = useState(null)
  const [recipe, setRecipe] = useState(null)

  const generateRecipe = useCallback(
    async ({
      dishType,
      ingredients,
      extraIngredients,
      healthLabels = [],
      dietLabels = [],
    }) => {
      try {
        setPromptState(PROMPT_STATE.loading)
        setError(null)
        setRecipe('')

        const prompt = createPrompt({
          dishType,
          ingredients,
          extraIngredients,
          healthLabels,
          dietLabels,
        })

        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
            maxTokens: 1500,
            temperature: 0.8,
          }),
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Failed to generate recipe')
        }

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let fullResponse = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.slice(6)

              if (dataStr.trim() === '[DONE]') {
                continue
              }

              try {
                const data = JSON.parse(dataStr)

                if (data.error) {
                  throw new Error(data.error)
                }

                if (data.content) {
                  fullResponse += data.content
                  setRecipe(fullResponse)
                  setPromptState(PROMPT_STATE.inProgress)
                }
              } catch (parseError) {
                console.error('Failed to parse SSE data:', parseError)
              }
            }
          }
        }

        setPromptState(PROMPT_STATE.success)
        return fullResponse
      } catch (err) {
        setError(err.message)
        setPromptState(PROMPT_STATE.error)
        throw err
      }
    },
    []
  )

  return {
    generateRecipe,
    recipe,
    promptState,
    error,
    isLoading: promptState === PROMPT_STATE.loading,
    isStreaming: promptState === PROMPT_STATE.inProgress,
  }
}

export default useRecipeGenerator
