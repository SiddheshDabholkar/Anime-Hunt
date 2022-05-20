import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const Mydark = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: '#0000ff66',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    scannerCard: 'lightblue',
  },
};

export const Mylight = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: '#0000ff66',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    scannerCard: 'yellow',
  },
};

export const Themes = {
  light: Mylight,
  dark: Mydark,
};
