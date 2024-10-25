import React from 'react'
import CookieGraphic from '@/assets/graphics/cookie.svg'

import styles from './CookieMascot.module.css'
import { SpeechBubble } from '../SpeechBubble'

const CookieMascot = ({ children, mood = 'idle', ...props }) => {
  return (
    <div className={styles.wrapper}>
      {children && <SpeechBubble>{children}</SpeechBubble>}
      <CookieGraphic {...props} className={`cookie-mascot ${styles[mood]}`} />
    </div>
  )
}

export default CookieMascot
