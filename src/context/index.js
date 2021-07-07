import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('javascript');
  const [inputCode, setInputCode] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        inputCode,
        setInputCode,
        language,
        setLanguage,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };
