import React from "react";
import { Range } from "react-range";

import styles from "./RangeInput.module.css";

const RangeInput = ({ value, setValue }) => {
  const handleChange = (v) => {
    setValue(v);
  };

  return (
    <Range
      label="Select your value"
      step={1}
      min={1}
      max={8}
      values={[value]}
      onChange={handleChange}
      renderTrack={({ props, children }) => (
        <div {...props} className={styles.track}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div {...props} key={props.key} className={styles.thumb}>
          <div className={styles.value}>{value}</div>
        </div>
      )}
      renderMark={({ props }) => <span {...props} className={styles.mark} />}
    />
  );
};

export default RangeInput;
