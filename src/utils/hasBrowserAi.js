export const hasBrowserAi = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return Boolean(window.ai?.languageModel ?? window.ai?.assistant);
};
