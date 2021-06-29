import React, { useContext, useEffect, useState } from 'react';
import map from 'lodash/map';
import { AppContext } from '../context';
import { OUTPUT_STYLES } from '../styles';
import { getOutput } from '../utils/output';
import { COLORS } from '../constants';

const Output = () => {
  const { inputCode, language, isDarkMode } = useContext(AppContext);
  const [output, setOutput] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const { result, isError: _isError } = getOutput(inputCode, language);
    setOutput(result);
    setIsError(_isError);
  }, [inputCode, language]);

  return (
    <div
      style={{
        ...OUTPUT_STYLES.wrapper,
        backgroundColor: isDarkMode ? COLORS.DARK_COLOR : COLORS.LIGHT_COLOR,
        color: isDarkMode ? COLORS.LIGHT_COLOR : COLORS.DARK_COLOR,
      }}
    >
      {map(output, (out, index) => (
        <div key={index}>
          <span style={{ fontSize: 20, color: isError && 'red' }}>{out}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Output;
