import React from "react";

import styles from "./SpeechBubble.module.css";

const SpeechBubble = ({ children }) => {
  return <aside className={styles.speechBubble}>{children}</aside>;
};

export default SpeechBubble;
