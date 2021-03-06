import isFunction from 'lodash/isFunction';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import join from 'lodash/join';
// eslint-disable-next-line
import * as typescript from 'typescript';

const getJSOutput = (code) => {
  // Original console.log
  const _log = console.log;

  // Logs Array: To Preserve Logs
  const logs = [];

  // Update console.log to return preserved logged string
  console.log = (...values) => {
    // Log value in console
    values.forEach((val) => _log(val));
    // Array of values logged
    const outputArray = map(values, (val) => {
      if (isFunction(val)) {
        return `Function ${val.name}`;
      }
      return JSON.stringify(val);
    });
    // Logged String
    const outputString = join(outputArray, ' ');
    // Complete logs including previous logs
    logs.push(outputString);
  };

  try {
    // eslint-disable-next-line no-eval
    eval(code);
    return { result: logs, isError: false };
  } catch (e) {
    return { result: [e.message], isError: true };
  }
};

const getTSOutput = (code) => {
  const options = {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
    },
    reportDiagnostics: true,
  };
  const transpiledCode = typescript.transpileModule(code, options);

  if (isEmpty(transpiledCode?.diagnostics)) {
    const jsoutput = getJSOutput(transpiledCode?.outputText);
    return jsoutput;
  }
  const errorMessage = map(
    transpiledCode?.diagnostics,
    (error) => `Error: ${error.messageText}`,
  );
  return { result: [errorMessage], isError: true };
};

const getPythonOutput = (code) => {
  const result = { result: code, isError: false };
  return result;
};

const getOutput = (code, language) => {
  switch (language) {
    case 'javascript':
      return getJSOutput(code);
    case 'typescript':
      return getTSOutput(code);
    case 'python':
      return getPythonOutput(code);
    default:
      return getJSOutput(code);
  }
};

export { getOutput };
export default { getOutput };
