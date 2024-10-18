import React from 'react'

import styles from './Footer.module.css'

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
        </a>
      </div>
    </footer>
  )
}

export default Footer
