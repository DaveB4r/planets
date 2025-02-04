/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#272C2E',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  PRIMARY: '#7f57f1',
  OPACITYPRIMARY: 'rgba(127,87,241,0.3)',
  PRIMARYDARK: '#DCC151',
  OPACITYPRIMARYDARK: 'rgba(220,193,81,0.3)',
  GRAY: '#8f8f8f',
  ICON_BG: '#e3ceec',
  ICON_BGDARK: '#F2D971',
  GRADIENTPRIMARY : ['rgba(110,62,250,1)','rgba(117,75,235,1)','rgba(129,95,227,1)'],
  GRADIENTPRIMARYDARK : ['rgba(237,209,93,1)','rgba(244,218,112,1)','rgba(247,231,169,1)'],
  GRADIENTGREEN: ['rgba(18,180,38,1)','rgba(21,215,45,1)','rgba(22,234,47,1)'],
  GREEN: '#53f727',
  RED: '#ce3838'
};
