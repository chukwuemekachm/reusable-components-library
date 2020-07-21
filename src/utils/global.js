import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 10px;
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    /* margin: 0; */
  }
`;
