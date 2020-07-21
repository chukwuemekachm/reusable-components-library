import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './utils';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';

function App() {

  return (
    <div>
      <PrimaryButton modifiers="warning">Primary Button</PrimaryButton>
      <SecondaryButton modifiers="warning">Secondary Button</SecondaryButton>
      <TertiaryButton modifiers="error">Tertiary Button</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}

render(<App />, document.getElementById('root'));
