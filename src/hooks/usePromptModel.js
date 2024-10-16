import { useEffect, useState } from "react";
import { useLanguageModelSession } from "./useLanguageModelSession";

const PROMPT_STATE = {
  init: "init",
  idle: "idle",
  loading: "loading",
};

export const usePromptModel = () => {
  const lmSession = useLanguageModelSession();
  const [promptState, setPromptState] = useState(PROMPT_STATE.init);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const promptModel = async (value) => {
    const prompt = value.trim();

    if (!prompt || typeof lmSession !== "object") {
      return;
    }

    setPromptState(PROMPT_STATE.loading);

    try {
      const stream = await lmSession.promptStreaming(prompt);
      for await (const chunk of stream) {
        setResponse(chunk.trim());
        setPromptState(PROMPT_STATE.idle);
      }
    } catch (error) {
      setError(error.message);
      setPromptState(PROMPT_STATE.idle);
    }
  };

  useEffect(() => {
    if (!lmSession) {
      return;
    }

    if (typeof lmSession === "string") {
      return setError(lmSession);
    }

    setPromptState(PROMPT_STATE.idle);
  }, [lmSession]);

  return { promptModel, promptState, response, error };
};
