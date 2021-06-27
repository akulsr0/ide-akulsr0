import isObject from "lodash/isObject";
import isFunction from "lodash/isFunction";
import isBoolean from "lodash/isBoolean";

const getOutput = (code) => {
  try {
    // eslint-disable-next-line no-eval
    const _output = eval(code);
    if (isBoolean(_output)) return _output ? "true" : "false";
    if (isFunction(_output)) return _output.name;
    if (isObject(_output)) return JSON.stringify(_output);
    return _output;
  } catch (e) {
    return e.message;
  }
};

export { getOutput };
