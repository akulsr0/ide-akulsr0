import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { OUTPUT_STYLES } from "../styles";
import { getOutput } from "../utils/output";

const Output = () => {
  const { inputCode, language } = useContext(AppContext);
  const [output, setOutput] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const { result, isError: _isError } = getOutput(inputCode, language);
    setOutput(result);
    setIsError(_isError);
  }, [inputCode, language]);

  return (
    <div style={OUTPUT_STYLES.wrapper}>
      {output.map((o) => (
        <>
          <span style={{ fontSize: 20, color: isError && "red" }}>{o}</span>
          <br />
        </>
      ))}
    </div>
  );
};

export default Output;
