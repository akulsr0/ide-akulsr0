import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("javascript");
  const [inputCode, setInputCode] = useState("");
  return (
    <AppContext.Provider
      value={{ inputCode, setInputCode, language, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
