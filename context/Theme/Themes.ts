import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const Mydark = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const Mylight = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const Themes = {
  light: Mylight,
  dark: Mydark,
};
