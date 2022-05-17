import React, {useState, createContext, ReactNode} from 'react';

type DarkModeContextTypes = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextTypes | null>(null);

type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({children}) => {
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
};

export default DarkModeProvider;
