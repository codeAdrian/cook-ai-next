"use client";

import React from "react";

import { usePromptModel } from "@/hooks/usePromptModel";
import CookAIPrompt from "./CookAIPrompt";

const CookAI = () => {
  const { promptModel, promptState, response, error } = usePromptModel();

  if (promptState === "init") {
    return "Loading...";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target["input-ingredients"].value;
    promptModel(value);
  };

  return (
    <div>
      <CookAIPrompt onSubmit={handleSubmit} />
      <div dangerouslySetInnerHTML={{ __html: response }} />
    </div>
  );
};

export default CookAI;
