import React from 'react'

import styles from './Footer.module.css'

const links = [
  { title: 'Twitter', url: 'https://x.com/AdrianBeceDev' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/adrianbece/' },
  {
    title: 'Bluesky',
    url: 'https://bsky.app/profile/adrianbecedev.bsky.social',
  },
  { title: 'GitHub', url: 'https://github.com/codeAdrian' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Created with ❤️🧡💛 by{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/AdrianBeceDev"
        >
          Adrian Bece
        </a>{' '}
        with{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://deepmind.google/technologies/gemini/nano/"
        >
          Gemini Nano&apos;s
        </a>{' '}
        Prompt API
      </div>

      <div className={styles.links}>
        {links.map(({ title, url }) => (
          <a key={url} rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
