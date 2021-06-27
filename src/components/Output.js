import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { OUTPUT_STYLES } from "../styles";
import { getOutput } from "../utils/output";

const Output = () => {
  const { inputCode } = useContext(AppContext);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const result = getOutput(inputCode);
    setOutput(result);
  }, [inputCode]);

  return (
    <div style={OUTPUT_STYLES.wrapper}>
      <span>{output}</span>
    </div>
  );
};

export default Output;
