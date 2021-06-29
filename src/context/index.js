import React, { createContext, useState } from 'react';

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

export { AppContext, AppContextProvider };
