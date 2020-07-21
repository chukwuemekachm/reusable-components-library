import { blue, neutral, green, yellow, red } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = Object.freeze({
  primaryFont,
  primaryColor: blue[100],
  primaryColorHover: blue[200],
  primaryColorActive: blue[300],
  primaryColorOutline: blue[400],
  primaryColorDisabled: neutral[400],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textOnDisabled: neutral[100],
  textColorInverted: neutral[100],
  success: {
    color: green[100],
    hoverColor: green[200],
    activeColor: green[300],
    textColor: neutral[100],
  },
  error: {
    color: red[100],
    hoverColor: red[200],
    activeColor: red[300],
    textColor: neutral[100],
  },
  warning: {
    color: yellow[100],
    hoverColor: yellow[200],
    activeColor: yellow[300],
    textColor: neutral[100],
  },
});
