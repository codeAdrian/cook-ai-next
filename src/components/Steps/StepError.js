import React from 'react'
import { CookieMascot } from '../CookieMascot'
import { Button } from '../Button'

const StepError = ({ children }) => {
  if (children) {
    return (
      <CookieMascot mood="concerned">
        <div>
          <div className="title">
            Sorry Chef, we&apos;re in a bit of a pickle.
          </div>
          {children}
        </div>
        <Button onClick={() => window.location.reload()}>
          Don&apos;t worry, let&apos;s try again.
        </Button>
      </CookieMascot>
    )
  }

  return (
    <CookieMascot mood="concerned">
      <div>
        <div className="title">
          Sorry Chef, we&apos;re in a bit of a pickle.
        </div>
        but yer browser doesn&apos;t support the Prompt API. If you&apos;re on
        Chrome, join the{' '}
        <a href="https://developer.chrome.com/docs/ai/built-in#get_an_early_preview">
          Early Preview Program
        </a>{' '}
        to enable it.
      </div>
    </CookieMascot>
  )
}

export default StepError
