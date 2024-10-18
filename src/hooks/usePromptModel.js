import { useEffect, useState } from 'react'
import { useLanguageModelSession } from './useLanguageModelSession'

const PROMPT_STATE = {
  init: 'init',
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
}

export const usePromptModel = () => {
  const lmSession = useLanguageModelSession()
  const [promptState, setPromptState] = useState(PROMPT_STATE.init)
  const [error, setError] = useState('')

  const promptModel = async (value, callback) => {
    const prompt = value.trim()

    if (!prompt || typeof lmSession !== 'object') {
      return
    }

    setPromptState(PROMPT_STATE.loading)

    try {
      const stream = await lmSession.promptStreaming(prompt)
      for await (const chunk of stream) {
        callback(chunk.trim())
        setPromptState(PROMPT_STATE.success)
      }
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
  }, [lmSession, promptState])

  return { promptModel, promptState, error }
}
