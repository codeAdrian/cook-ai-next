import { useState, useCallback } from 'react'

const useOpenAI = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generateCompletion = useCallback(
    async ({
      prompt,
      model = 'gpt-3.5-turbo',
      maxTokens = 1000,
      temperature = 0.7,
    }) => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
            model,
            maxTokens,
            temperature,
          }),
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Failed to generate completion')
        }

        const data = await response.json()
        return data.content
      } catch (err) {
        setError(err.message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    generateCompletion,
    loading,
    error,
  }
}

export default useOpenAI
