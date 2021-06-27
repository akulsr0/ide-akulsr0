import isFunction from "lodash/isFunction";
import map from "lodash/map";
import join from "lodash/join";

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
    const outputString = join(outputArray, " ");
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

const getPythonOutput = (code) => {
  return { result: code, isError: false };
};

const getOutput = (code, language) => {
  switch (language) {
    case "javascript":
      return getJSOutput(code);
    case "python":
      return getPythonOutput(code);
    default:
      return getJSOutput(code);
  }
};

export { getOutput };
