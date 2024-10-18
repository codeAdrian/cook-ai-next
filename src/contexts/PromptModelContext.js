'use client'

import { usePromptModel } from '@/hooks/usePromptModel'
import { createContext, useContext, memo } from 'react'

const PromptModelContext = createContext({})

const PromptModelContextComponent = ({ children }) => {
  const value = usePromptModel()

  return (
    <PromptModelContext.Provider value={value}>
      {children}
    </PromptModelContext.Provider>
  )
}

export const usePromptModelValues = () => useContext(PromptModelContext)

export const PromptModelContextProvider = memo(PromptModelContextComponent)
