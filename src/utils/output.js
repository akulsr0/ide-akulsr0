import isObject from "lodash/isObject";
import isFunction from "lodash/isFunction";
import isBoolean from "lodash/isBoolean";

const getJSOutput = (code) => {
  try {
    // eslint-disable-next-line no-eval
    const _output = eval(code);
    if (isBoolean(_output))
      return _output
        ? { result: "true", isError: false }
        : { result: "false", isError: false };
    if (isFunction(_output)) return { result: _output.name, isError: false };
    if (isObject(_output))
      return { result: JSON.stringify(_output), isError: false };
    return { result: _output, isError: false };
  } catch (e) {
    return { result: e.message, isError: true };
  }
};

const getOutput = (code, language) => {
  switch (language) {
    case "javascript":
      return getJSOutput(code);
    default:
      return getJSOutput(code);
  }
};

export { getOutput };
