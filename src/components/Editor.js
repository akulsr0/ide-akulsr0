import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import CodeEditor from '@monaco-editor/react';
import useClippy from 'use-clippy';
import { AppContext } from '../context';
import { EDITOR_STYLES } from '../styles';
import { LINKS, MIN_INNER_WIDTH } from '../constants';
import { fetchLinkData, shareLink } from '../utils';

const Editor = ({ codeSnippetId }) => {
  const {
    inputCode,
    setInputCode,
    language,
    setLanguage,
    isDarkMode,
    setIsDarkMode,
  } = useContext(AppContext);

  const darkModeCheckboxRef = useRef(null);
  const [isCreatingLink, setIsCreatingLink] = useState(false);
  const [, setClipboard] = useClippy();

  useEffect(() => {
    if (codeSnippetId) {
      fetchLinkData(codeSnippetId, (err, data) => {
        if (err) {
          window.alert('Link is not valid');
          return;
        }
        setInputCode(data.code_snippet);
        setIsDarkMode(data.is_dark_theme);
        setLanguage(data.language);
      });
    }
  }, []);

  const onPressShareLink = () => {
    if (isCreatingLink) {
      window.alert('Already creating link, please wait!');
      return;
    }
    setIsCreatingLink(true);
    const payload = { language, isDarkMode, inputCode };
    shareLink(payload, (err, data) => {
      setIsCreatingLink(false);
      if (data) {
        const newLink = `https://ide.akul.codes/${data.id}`;
        setClipboard(newLink);
        window.alert(
          `Your link is created and copied to clipboard\n ${newLink}`,
        );
      }
    });
  };

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
    <div
      style={{
        ...EDITOR_STYLES.wrapper,
        width: window.innerWidth > MIN_INNER_WIDTH ? 'unset' : '100%',
      }}
    >
      <div
        style={{
          ...EDITOR_STYLES.topbar,
          flexDirection: window.innerWidth > MIN_INNER_WIDTH ? 'row' : 'column',
        }}
      >
        <div style={EDITOR_STYLES.topbarLeft}>
          <span style={EDITOR_STYLES.topbarTitle}>Code Playgrounds</span>
          {icons}
        </div>
        <div>
          <span>Dark Mode: </span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="switch">
            <input
              ref={darkModeCheckboxRef}
              type="checkbox"
              checked={isDarkMode}
              onChange={() => {
                setIsDarkMode(darkModeCheckboxRef.current.checked);
              }}
            />
            <span className="slider" />
          </label>
          <span>Language: </span>
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language.toLowerCase()}
          >
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
            {/* <option value="python">Python</option> */}
          </select>
          &nbsp;
          <button
            type="button"
            style={EDITOR_STYLES.shareLink}
            onClick={onPressShareLink}
            disabled={isCreatingLink}
          >
            Share Link
          </button>
        </div>
      </div>
      <CodeEditor
        height="100%"
        language={language}
        theme={isDarkMode ? 'vs-dark' : 'vs-light'}
        options={{ fontSize: 16 }}
        value={inputCode}
        onChange={(val) => setInputCode(val)}
      />
    </div>
  );
};

Editor.propTypes = {
  codeSnippetId: PropTypes.string.isRequired,
};

export default Editor;
