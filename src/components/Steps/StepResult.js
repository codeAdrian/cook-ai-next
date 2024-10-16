import React from "react";
import { CookieMascot } from "../CookieMascot";
import { Recipe } from "../Recipe";

const StepResult = () => {
  const response = "TODO";
  return (
    <li>
      <Recipe response={response} />
      <CookieMascot mood="happy" />
    </li>
  );
};

export default StepResult;
