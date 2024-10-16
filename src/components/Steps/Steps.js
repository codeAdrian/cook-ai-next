"use client";

import React from "react";

import StepError from "./StepError";
import DOMPurify from "dompurify";

import { usePromptModelValues } from "@/contexts/PromptModelContext";

import styles from "./Steps.module.css";

import StepLabels from "./StepLabels";
import StepResult from "./StepResult";

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
      <StepResult />
    </ul>
  );
};

export default Steps;
