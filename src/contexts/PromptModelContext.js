'use client'

import useRecipeGenerator from '@/hooks/useRecipeGenerator'
import { createContext, useContext, memo } from 'react'

const PromptModelContext = createContext({})

const PromptModelContextComponent = ({ children }) => {
  const value = useRecipeGenerator()

  return (
    <PromptModelContext.Provider value={value}>
      {children}
    </PromptModelContext.Provider>
  )
}

export const usePromptModelValues = () => useContext(PromptModelContext)

export const PromptModelContextProvider = memo(PromptModelContextComponent)
