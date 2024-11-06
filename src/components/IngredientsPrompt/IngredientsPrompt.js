import React, { useRef, useState } from 'react'
import { Button } from '../Button'

import styles from './IngredientsPrompt.module.css'
import { Input } from '../Input'
import SelectedIngredients from './SelectedIngredients'

import dynamic from 'next/dynamic'
import { SkeletonLoader } from '../SkeletonLoader'
import { Plus } from 'lucide-react'

const Suggestions = dynamic(() => import('./Suggestions'), {
  ssr: false,
  loading: () => <SkeletonLoader style={{ height: '112px' }} />,
})

const RangeInput = dynamic(() => import('../RangeInput/RangeInput'), {
  ssr: false,
  loading: () => <SkeletonLoader style={{ height: '4px' }} />,
})

const INGREDIENTS_LIMIT = 12

const IngredientsPrompt = ({ handleSubmit, values }) => {
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [numberOfExtras, setNumberOfExtras] = useState(
    values.current.extraIngredients || 3
  )
  const [ingredients, setIngredients] = useState(
    values.current.ingredients ? values.current.ingredients.split(', ') : []
  )

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value)
  }

  const addIngredientToList = (value) => {
    if (ingredients.length >= INGREDIENTS_LIMIT) {
      return
    }

    setIngredients((v) => [...v, value.toLowerCase()])
    setSearch('')
    inputRef.current.focus()
  }

  const removeIngredientFromList = (index) => {
    setIngredients((list) => list.filter((_, i) => i !== index))
    inputRef.current.focus()
  }

  const handleAddManual = (e) => {
    e.preventDefault()

    if (search.length < 3 || ingredients.length >= INGREDIENTS_LIMIT) {
      return
    }
    addIngredientToList(search)
    inputRef.current.focus()
  }

  return (
    <article className={styles.wrapper}>
      <div className={styles.grid}>
        <section className={styles.section}>
          <div>
            <label htmlFor="input-ingredient">
              <strong>Add ingredient to the list</strong>
            </label>
          </div>
          <form
            onSubmit={handleAddManual}
            autoComplete="off"
            className={styles.form}
          >
            <Input
              inputRef={inputRef}
              maxLength={25}
              placeholder="E.g. Sweet potato"
              type="text"
              id="input-ingredient"
              value={search}
              onChange={handleSearch}
            />
            <Button type="submit">
              <span className="sr-only">Add ingredient</span>
              <Plus width={24} height={24} strokeWidth={3} />
            </Button>
          </form>
          <Suggestions
            addIngredientToList={addIngredientToList}
            values={ingredients}
            input={search}
          />
        </section>
        <section className={styles.section}>
          <SelectedIngredients
            removeIngredientFromList={removeIngredientFromList}
            limit={INGREDIENTS_LIMIT}
            ingredients={ingredients}
          />
        </section>
      </div>

      <section className={styles.section}>
        <label>
          <strong>Additional ingredients (optional)</strong>
        </label>
        <RangeInput value={numberOfExtras} setValue={setNumberOfExtras} />
      </section>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          value={ingredients.join(', ')}
          type="hidden"
          id="input-ingredients"
        />
        <input type="hidden" value={numberOfExtras} id="input-extras" />
        <Button
          style={{ width: '100%' }}
          disabled={ingredients.length < 3}
          type="submit"
        >
          Save and continue
        </Button>
      </form>
    </article>
  )
}

export default IngredientsPrompt
