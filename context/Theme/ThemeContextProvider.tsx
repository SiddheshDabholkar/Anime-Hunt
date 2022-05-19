import React, {createContext, useState, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {Themes, Mydark, Mylight} from './Themes';

type Theme = 'dark' | 'light' | null | undefined;

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>> | null;
};

type ThemeContextProviderType = {
  children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: null,
});

const ThemeContextProvider: React.FC<ThemeContextProviderType> = ({
  children,
}) => {
  const color = useColorScheme();
  const sanitizedColor = color === null ? 'light' : color;
  const [theme, setTheme] = useState<Theme>(sanitizedColor);

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

export {ThemeContextProvider, ThemeContext, Themes, Mydark, Mylight};
