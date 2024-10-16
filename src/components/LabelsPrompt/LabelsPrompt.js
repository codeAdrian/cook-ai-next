import React from "react";

import styles from "./LabelsPrompt.module.css";
import { dietLabels, healthLabels } from "@/constants/labelOptions";
import { Button } from "../Button";

const LabelsPrompt = () => {
  return (
    <form className={styles.wrapper}>
      <article className={styles.grid}>
        <section>
          <strong className={styles.header}>Health labels</strong>
          <ul className={styles.list}>
            {healthLabels.map(({ title, value, description }) => (
              <li key={value}>
                <label className={styles.label}>
                  <input name={value} value={value} type="checkbox" />
                  <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <small className={styles.description}>{description}</small>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <strong className={styles.header}>Diet labels</strong>
          <ul className={styles.list}>
            {dietLabels.map(({ title, value, description }) => (
              <li key={value}>
                <label className={styles.label}>
                  <input name="diet" value={value} type="radio" />
                  <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <small className={styles.description}>{description}</small>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <div className={styles.buttons}>
        <Button variant="cta" type="submit">
          Submit and generate recipe
        </Button>
        <Button variant="secondary" type="reset">
          Clear all
        </Button>
      </div>
    </form>
  );
};

export default LabelsPrompt;
