import React from "react";

import { CookieMascot } from "../CookieMascot";
import { LabelsPrompt } from "../LabelsPrompt";

const StepLabels = () => {
  return (
    <li>
      <LabelsPrompt />
      <CookieMascot>
        <div>
          <span className="title">We&apos;re on a roll, Chef!</span>
          <div>
            Let&apos;s talk about any dietary or health preferences I should
            know about before I start comin&apos; up with a recipe. I donut want
            to create aything less than perfect, see? Let me know when yer done
            and I&apos;ll start cookin&apos;.
          </div>
        </div>
      </CookieMascot>
    </li>
  );
};

export default StepLabels;
