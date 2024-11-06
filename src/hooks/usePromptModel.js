import { useEffect, useState } from 'react'
import { useLanguageModelSession } from './useLanguageModelSession'
import { PROMPT_STATE } from '@/constants/promptState'

export const usePromptModel = () => {
  const lmSession = useLanguageModelSession()
  const [promptState, setPromptState] = useState(PROMPT_STATE.init)
  const [error, setError] = useState('')

  const promptModel = async (value, callback) => {
    setPromptState(PROMPT_STATE.loading)
    const prompt = value.trim()

    if (!prompt || typeof lmSession !== 'object') {
      return
    }

    try {
      const stream = await lmSession.promptStreaming(prompt)
      setPromptState(PROMPT_STATE.inProgress)

      for await (const chunk of stream) {
        callback(chunk.trim())
      }

      setPromptState(PROMPT_STATE.success)
    } catch (error) {
      setError(error.message)
      setPromptState(PROMPT_STATE.error)
    }
  }

  useEffect(() => {
    if (!lmSession) {
      return
    }

    if (typeof lmSession === 'string') {
      return setError(lmSession)
    }

    setPromptState(PROMPT_STATE.idle)
  }, [lmSession])

  return { promptModel, promptState, error }
}
