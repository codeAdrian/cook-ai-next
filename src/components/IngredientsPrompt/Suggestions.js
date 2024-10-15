import { ingredientsSuggesions } from "@/constants/ingredientsSuggestions";
import React, { useMemo } from "react";
import { Button } from "../Button";

import styles from "./Suggestions.module.css";

const SUGGESTIONS_LIMIT = 3;
const INPUT_LETTERS_LIMIT = 1;

const Suggestions = ({ input = "", values = [], addIngredientToList }) => {
  input = input.toLowerCase();
  values = values.map((v) => v.toLowerCase());

  const suggestedIngredients = useMemo(() => {
    let suggestions = [];

    if (input && input.length >= INPUT_LETTERS_LIMIT) {
      ingredientsSuggesions.some((suggestionFromList) => {
        if (
          suggestionFromList.includes(input) &&
          !suggestions.includes(suggestionFromList) &&
          !values.includes(suggestionFromList)
        ) {
          suggestions.push(suggestionFromList);
        }
        return suggestions.length >= SUGGESTIONS_LIMIT;
      });
    }

    if (suggestions.length >= SUGGESTIONS_LIMIT) {
      return suggestions;
    }

    ingredientsSuggesions.some((suggestionFromList) => {
      if (
        !values.includes(suggestionFromList.toLowerCase()) &&
        !suggestions.includes(suggestionFromList)
      ) {
        suggestions.push(suggestionFromList);
      }
      return suggestions.length >= SUGGESTIONS_LIMIT;
    });

    return suggestions;
  }, [input, values]);

  const handleClick = (e) => {
    addIngredientToList(e.currentTarget.value);
  };

  return (
    <div className={styles.wrap}>
      <div>Suggestions:</div>
      <ul role="list" className={styles.list}>
        {suggestedIngredients.map((suggestion, index) => (
          <li key={`suggestion-${suggestion}-${index}`}>
            <Button
              type="button"
              onClick={handleClick}
              variant="outline"
              value={suggestion}
            >
              {`+ ${suggestion}`}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
