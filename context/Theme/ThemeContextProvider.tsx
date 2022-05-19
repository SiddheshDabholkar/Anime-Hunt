import React, {createContext, useState, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {Themes, Mydark, Mylight} from './Themes';

type Theme = 'dark' | 'light' | null | undefined;

type ThemeContextType = {
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};

type ThemeContextProviderType = {
  children: ReactNode;
};

const ThemeContext = createContext<Partial<ThemeContextType>>({
  theme: 'dark',
});

const ThemeContextProvider: React.FC<ThemeContextProviderType> = ({
  children,
}) => {
  const color = useColorScheme();
  const sanitizedColor = color === null ? 'light' : color;
  const [theme, setTheme] = useState<Theme>(sanitizedColor);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContextProvider, ThemeContext, Themes, Mydark, Mylight};
