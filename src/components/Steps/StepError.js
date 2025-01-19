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
        Your browser might not support all the features we need. Please try
        using a modern browser like Chrome, Edge, or Safari. If you&apos;re
        already using Chrome, make sure you&apos;re on the latest version.
      </div>
    </CookieMascot>
  )
}

export default StepError
