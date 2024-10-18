export const hasBrowserAi = () => {
  if (typeof window === 'undefined') {
    return undefined
  }

  return Boolean(self.ai?.languageModel)
}
