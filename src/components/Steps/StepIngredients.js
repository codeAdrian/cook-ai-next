import React from "react";
import { CookieMascot } from "../CookieMascot";
import { usePromptModelValues } from "@/contexts/PromptModelContext";
import { IngredientsPrompt } from "../IngredientsPrompt";

const StepIngredients = () => {
  const { promptModel } = usePromptModelValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target["input-ingredients"].value;
    promptModel(value);
  };

  return (
    <li>
      <IngredientsPrompt onSubmit={handleSubmit} />
      <CookieMascot>
        <div>
          <span className="title">That is Egg-cellent, Chef!</span>
          <div>
            Start by adding some <strong>ingredients</strong> which I&apos;ll
            use to create an amazin&apos; recipe for ya. Also, let me know how
            many <strong>extra ingredients</strong> should I use that
            aren&apos;t on the list. Let&apos;s just call it my personal touch,
            capiche? Make sure to add <strong>at least three</strong>{" "}
            ingredients. Anything less and you&apos;d be pullin&apos; my leg.
          </div>
        </div>
      </CookieMascot>
    </li>
  );
};

export default StepIngredients;
