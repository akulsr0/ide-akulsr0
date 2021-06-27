import { useRef, useContext } from "react";
import capitalize from "lodash/capitalize";
import map from "lodash/map";
import CodeEditor from "@monaco-editor/react";
import { AppContext } from "../context";
import { EDITOR_STYLES } from "../styles";
import { LINKS } from "../constants";

const Editor = () => {
  const {
    inputCode,
    setInputCode,
    language,
    setLanguage,
    isDarkMode,
    setIsDarkMode,
  } = useContext(AppContext);

  const darkModeCheckboxRef = useRef(null);

  const icons = map(LINKS, (link) => (
    <a
      key={link.alt}
      href={link.url}
      style={EDITOR_STYLES.link}
      rel="noreferrer"
      target="_blank"
    >
      <img src={link.img} alt={link.alt} style={EDITOR_STYLES.iconImage} />
    </a>
  ));

  return (
    <div style={EDITOR_STYLES.wrapper}>
      <div style={EDITOR_STYLES.topbar}>
        <div style={EDITOR_STYLES.topbarLeft}>
          <span style={EDITOR_STYLES.topbarTitle}>
            {capitalize(language)} Playgrounds
          </span>
          {icons}
        </div>
        <div>
          <span>Dark Mode: </span>
          <label className="switch">
            <input
              ref={darkModeCheckboxRef}
              type="checkbox"
              onClick={() => setIsDarkMode(darkModeCheckboxRef.current.checked)}
            />
            <span className="slider"></span>
          </label>
          <span>Language: </span>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="javascript">Javascript</option>
            {/* <option value="python">Python</option> */}
          </select>
        </div>
      </div>
      <CodeEditor
        height="100%"
        language={language}
        theme={isDarkMode ? "vs-dark" : "vs-light"}
        options={{ fontSize: 16 }}
        defaultValue={inputCode}
        onChange={(val) => setInputCode(val)}
      />
    </div>
  );
};

export default Editor;
