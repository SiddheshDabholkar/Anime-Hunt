import React, {createContext, useState, ReactNode, memo} from 'react';
import {useColorScheme} from 'react-native';

type Theme = 'dark' | 'light' | null | undefined;

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type ThemeContextProviderType = {
  children: ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProviderType> = ({
  children,
}) => {
  const color = useColorScheme();
  const [theme, setTheme] = useState<Theme>(color);
  const ThemeContext = createContext<ThemeContextType>({theme: null, setTheme});

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeContextProvider);
