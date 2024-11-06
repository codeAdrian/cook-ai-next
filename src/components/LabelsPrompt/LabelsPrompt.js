import React from 'react'

import styles from './LabelsPrompt.module.css'
import { dietLabels, healthLabels } from '@/constants/labelOptions'
import { Button } from '../Button'
import { Toggle } from '../Toggle'

const LabelsPrompt = ({ handleSubmit, values }) => {
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
      className={styles.wrapper}
    >
      <div className={styles.section}>
        <article className={styles.grid}>
          <section>
            <strong className={styles.header}>Health labels (optional)</strong>
            <ul className={styles.list}>
              {healthLabels.map(({ title, value, description }) => (
                <li key={value}>
                  <label className={styles.label}>
                    <Toggle
                      name="health"
                      value={value}
                      defaultChecked={values.current.healthLabels.includes(
                        value
                      )}
                    />
                    <div className={styles.content}>
                      <p className={styles.title}>{title}</p>
                      <small className={styles.description}>
                        {description}
                      </small>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <strong className={styles.header}>Diet labels (optional)</strong>
            <ul className={styles.list}>
              {dietLabels.map(({ title, value, description }) => (
                <li key={value}>
                  <label className={styles.label}>
                    <Toggle
                      name="diet"
                      value={value}
                      defaultChecked={values.current.dietLabels.includes(value)}
                    />
                    <div className={styles.content}>
                      <p className={styles.title}>{title}</p>
                      <small className={styles.description}>
                        {description}
                      </small>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <div>
        <Button style={{ width: '100%' }} variant="cta" type="submit">
          Save and create a recipe
        </Button>
      </div>
    </form>
  )
}

export default LabelsPrompt
