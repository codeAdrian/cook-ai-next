import React from "react";
import { Button } from "../Button";

import styles from "./SelectedIngredients.module.css";

const SelectedIngredients = ({
  removeIngredientFromList,
  ingredients,
  limit,
}) => {
  const handleClick = (e) =>
    removeIngredientFromList(parseInt(e.currentTarget.value));

  return (
    <div className={styles.wrapper}>
      <p>
        Selected ingredients{" "}
        <small>
          <strong>({`${ingredients.length}/${limit}`})</strong>
        </small>
      </p>

      <div className={styles.scrollWrap}>
        <ul className={styles.list}>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <li key={`selected-${ingredient}-${index}`}>
                <Button
                  value={index}
                  onClick={handleClick}
                  type="button"
                  variant="outline-cta"
                >
                  {`- ${ingredient}`}
                </Button>
              </li>
            ))
          ) : (
            <li className={styles.empty}>
              Your selected ingredients will appear here
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectedIngredients;
