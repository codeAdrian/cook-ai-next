'use client'

import dynamic from 'next/dynamic'
import { SkeletonLoader } from '@/components/SkeletonLoader'

const Steps = dynamic(() => import('./Steps/Steps'), {
  ssr: true,
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

export default function ClientSteps() {
  return <Steps />
}
