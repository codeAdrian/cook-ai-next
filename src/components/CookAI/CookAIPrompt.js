import React from "react";

const CookAIPrompt = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Prompt
          <textarea id="input-ingredients"></textarea>
        </label>
        <button type="submit">Submit prompt</button>
      </form>
    </div>
  );
};

export default CookAIPrompt;
