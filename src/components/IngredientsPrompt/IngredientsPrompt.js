import React, { useState } from "react";
import { Button } from "../Button";
import Suggestions from "./Suggestions";

import styles from "./IngredientsPrompt.module.css";
import { Input } from "../Input";
import SelectedIngredients from "./SelectedIngredients";
import { RangeInput } from "../RangeInput";

const INGREDIENTS_LIMIT = 20;

const IngredientsPrompt = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");
  const [numberOfExtras, setNumberOfExtras] = useState(5);
  const [ingredients, setIngredients] = useState([]);

  const handleSearch = (e) => {
    e;
    setSearch(e.currentTarget.value);
  };

  const addIngredientToList = (value) => {
    if (ingredients.length >= INGREDIENTS_LIMIT) {
      return;
    }

    setIngredients((v) => [...v, value]);
    setSearch("");
  };

  const removeIngredientFromList = (index) => {
    setIngredients((list) => list.filter((_, i) => i !== index));
  };

  const handleAddManual = (e) => {
    e.preventDefault();

    if (search.length < 3 || ingredients.length >= INGREDIENTS_LIMIT) {
      return;
    }

    addIngredientToList(search);
  };

  return (
    <article className={styles.wrapper}>
      <section className={styles.section}>
        <div>
          <label for="input-ingredient">Add your ingredients to the list</label>
        </div>
        <form
          onClick={handleAddManual}
          autoComplete="off"
          className={styles.form}
        >
          <Input
            placeholder="E.g. Egg"
            type="text"
            id="input-ingredient"
            value={search}
            onChange={handleSearch}
          />
          <Button type="submit">+</Button>
        </form>
        <Suggestions
          addIngredientToList={addIngredientToList}
          values={ingredients}
          input={search}
        />

        <SelectedIngredients
          removeIngredientFromList={removeIngredientFromList}
          limit={INGREDIENTS_LIMIT}
          ingredients={ingredients}
        />
      </section>
      <section className={styles.section}>
        <label>Extra ingredients</label>
        <RangeInput value={numberOfExtras} setValue={setNumberOfExtras} />
      </section>

      <section>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            value={ingredients.join(", ")}
            type="hidden"
            id="input-ingredients"
          />
          <input type="hidden" value={numberOfExtras} id="input-extras" />
          <Button type="submit">Find me a perfect recipe!</Button>
        </form>
      </section>
    </article>
  );
};

export default IngredientsPrompt;
