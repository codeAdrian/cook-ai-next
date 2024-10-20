import React from 'react'

import dynamic from 'next/dynamic'
import { SkeletonLoader } from '@/components/SkeletonLoader'

const Steps = dynamic(() => import('../components/Steps/Steps'), {
  ssr: false,
  loading: () => (
    <SkeletonLoader
      style={{
        width: '100%',
        margin: '0 auto',
        height: '70vh',
        maxWidth: '768px',
        backgroundColor: 'var(--color__gray--button)',
      }}
    />
  ),
})

const Home = () => {
  return (
    <div className="container">
      <Steps />
    </div>
  )
}

export default Home
