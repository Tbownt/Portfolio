/* eslint-disable react/prop-types */
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const setEsLanguage = () => {
    setLanguage("es");
  };

  const setEnLanguage = () => {
    setLanguage("en");
  };

  return (
    <LanguageContext.Provider
      value={{ language, setEsLanguage, setEnLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
