'use client'

import React, { useState } from 'react'

const ContentWithMascot = ({ mascot, children, hideMascot = false }) => {
  const [showMascot, setShowMascot] = useState(true)

  const showContent = () => setShowMascot(false)

  if (showMascot && !hideMascot) {
    return <>{mascot(showContent)}</>
  }

  return <>{children}</>
}

export default ContentWithMascot
