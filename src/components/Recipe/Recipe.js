import React from "react";

import styles from "./Recipe.module.css";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { Button } from "../Button";

const Recipe = ({ response }) => {
  return (
    <article className={styles.recipe}>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(response)),
        }}
      />
      <hr />
      <div>
        <Button>Print</Button>
        <Button>Edit ingredients</Button>
      </div>
    </article>
  );
};

export default Recipe;
