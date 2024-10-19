import React from 'react'

import styles from './DishTypeInput.module.css'
import { dishTypeOptions } from '@/constants/dishTypeOptions'
import { Button } from '../Button'

const DishTypeInput = ({ values, onSubmit }) => {
  return (
    <form autoComplete="false" onSubmit={onSubmit}>
      <article className={styles.wrapper}>
        I want to create
        <ul className={styles.list}>
          {dishTypeOptions.map(({ title, value }, i) => (
            <li key={value} className={styles.item}>
              <label className={styles.label}>
                {title}
                <input
                  defaultChecked={values.current.dishType === value}
                  name="dish-type"
                  value={value}
                  className={styles.input}
                  type="radio"
                />
              </label>
            </li>
          ))}
        </ul>
      </article>

      <Button style={{ width: '100%' }} type="submit">
        Save and continue
      </Button>
    </form>
  )
}

export default DishTypeInput
