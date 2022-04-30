import React, {useState, createContext} from 'react';

const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}>
      {children}
    </DarkModeContext.Provider>
  );
}
