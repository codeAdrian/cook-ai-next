"use client";

import React from "react";

import StepError from "./StepError";
import DOMPurify from "dompurify";
import StepIngredients from "./StepIngredients";
import { usePromptModelValues } from "@/contexts/PromptModelContext";
import StepIntro from "./StepIntro";

import styles from "./Steps.module.css";

const Steps = () => {
  const { error } = usePromptModelValues();

  if (error) {
    return (
      <StepError>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(error) }} />
      </StepError>
    );
  }

  return (
    <ul className={styles.list} role="list">
      <StepIngredients />
    </ul>
  );
};

export default Steps;
