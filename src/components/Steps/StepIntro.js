import React from "react";
import { CookieMascot } from "../CookieMascot";
import { Button } from "../Button";

const StepIntro = () => {
  return (
    <li>
      <CookieMascot mood="welcome">
        <div>
          <span className="title">Hi there Chef,</span>
          <div>
            Rice to meet ya! My name is <strong>CookAI</strong>. Looking for a
            delicious inspiration, fresh ideas or just want to turn yer
            leftovers into yummy dishes or snacks? I&apos;m yer buddy. Let me
            know when you&apos;re ready!
          </div>
        </div>

        <Button>Let&apos;s get cookin&apos;</Button>
      </CookieMascot>
    </li>
  );
};

export default StepIntro;
