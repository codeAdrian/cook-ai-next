import { hasBrowserAi } from '@/utils/hasBrowserAi'
import { useCallback, useEffect, useState } from 'react'

export const useLanguageModelSession = () => {
  const [lmSession, setLmSession] = useState()
  const isSupported = hasBrowserAi()

  const createSession = useCallback(() => {
    self.ai?.languageModel
      .capabilities()
      .then(({ defaultTopK, maxTopK, defaultTemperature }) =>
        self.ai?.languageModel.create({
          temperature: defaultTemperature,
          topK: defaultTopK,
          max: maxTopK,
        })
      )
      .then((s) => setLmSession(s))
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !isSupported) {
      return
    }

    if (!lmSession) {
      createSession()
    }

    return () => {
      if (lmSession) {
        lmSession.destroy()
      }
    }
  }, [createSession, lmSession, isSupported])

  if (!isSupported) {
    return `Your browser doesn't support the Prompt API. If you're on Chrome, join the <a href="https://developer.chrome.com/docs/ai/built-in#get_an_early_preview">Early Preview Program</a> to enable it.`
  }

  return lmSession
}
