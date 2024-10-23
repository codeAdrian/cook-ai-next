import { CookieMascot } from '@/components/CookieMascot'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrapper">
      <CookieMascot mood="concerned">
        <div>
          <div className="title">
            Sorry Chef, we&apos;re in a bit of a pickle.
          </div>
          Not even I can cook this page up. Let&apos;s{' '}
          <Link href="/">return home</Link> and grab some snacks.
        </div>
      </CookieMascot>
    </div>
  )
}
