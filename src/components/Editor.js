import { useContext } from "react";
import CodeEditor from "@monaco-editor/react";
import { AppContext } from "../context";
import { EDITOR_STYLES } from "../styles";

const Editor = () => {
  const { inputCode, setInputCode, language, setLanguage } =
    useContext(AppContext);

  return (
    <div style={EDITOR_STYLES.wrapper}>
      <div style={EDITOR_STYLES.topbar}>
        <span>Language: </span>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">Javascript</option>
        </select>
      </div>
      <CodeEditor
        height="100%"
        language={language}
        theme="vs-light"
        defaultValue={inputCode}
        onChange={(val) => setInputCode(val)}
      />
    </div>
  );
};

export default Editor;
