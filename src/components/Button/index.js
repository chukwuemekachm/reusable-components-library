import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { typeScale, defaultTheme } from '../../utils';

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.PARAGRAPH};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  border: 2px solid transparent;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 2px solid ${defaultTheme.primaryColorOutline};
    outline-offset: 2px;
    -moz-outline-radius: 5px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorInverted};
  }
`;

const PRIMARY_MODIFY_CONFIG = {
  success: () => `
    background-color: ${defaultTheme.success.color};
    color: ${defaultTheme.success.textColor};

    &:hover {
      background-color: ${defaultTheme.success.hoverColor};
    }
  
    &:focus {
      outline: 2px solid ${defaultTheme.success.hoverColor};
    }
  
    &:active {
      background-color: ${defaultTheme.success.activeColor};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.error.color};
    color: ${defaultTheme.error.textColor};

    &:hover {
      background-color: ${defaultTheme.error.hoverColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.error.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.error.activeColor};
    }
  `,
  warning: () => `
    background-color: ${defaultTheme.warning.color};
    color: ${defaultTheme.warning.textColor};

    &:hover {
      background-color: ${defaultTheme.warning.hoverColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.warning.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.warning.activeColor};
    }
  `,
};

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${defaultTheme.textColorOnPrimary};

  ${applyStyleModifiers(PRIMARY_MODIFY_CONFIG)};

  &:disabled {
    background-color: ${defaultTheme.primaryColorDisabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`;

const SECONDARY_MODIFY_CONFIG = {
  success: () => `
    border: 2px solid ${defaultTheme.success.color};
    color: ${defaultTheme.success.hoverColor};

    &:hover {
      background-color: ${defaultTheme.success.hoverColor};
    }
  
    &:focus {
      outline: 2px solid ${defaultTheme.success.hoverColor};
    }
  
    &:active {
      background-color: ${defaultTheme.success.activeColor};
      color: ${defaultTheme.success.textColor};
    }
  `,
  error: () => `
    border: 2px solid ${defaultTheme.error.color};
    color: ${defaultTheme.error.hoverColor};

    &:hover {
      border: 2px solid ${defaultTheme.error.hoverColor};
      background-color: ${defaultTheme.error.hoverColor};
      color: ${defaultTheme.error.textColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.error.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.error.activeColor};
      color: ${defaultTheme.error.textColor};
    }
  `,
  warning: () => `
    border: 2px solid ${defaultTheme.warning.color};
    color: ${defaultTheme.warning.hoverColor};

    &:hover {
      border: 2px solid ${defaultTheme.warning.hoverColor};
      background-color: ${defaultTheme.warning.hoverColor};
      color: ${defaultTheme.warning.textColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.warning.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.warning.activeColor};
      color: ${defaultTheme.warning.textColor};
    }
  `,
};

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  ${applyStyleModifiers(SECONDARY_MODIFY_CONFIG)};

  &:disabled {
    border-color: ${defaultTheme.primaryColorDisabled};
    background-color: transparent;
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`;

const TERTIARY_MODIFY_CONFIG = {
  success: () => `
    color: ${defaultTheme.success.hoverColor};

    &:hover {
      background-color: ${defaultTheme.success.hoverColor};
    }
  
    &:focus {
      outline: 2px solid ${defaultTheme.success.hoverColor};
    }
  
    &:active {
      background-color: ${defaultTheme.success.activeColor};
      color: ${defaultTheme.success.textColor};
    }
  `,
  error: () => `
    color: ${defaultTheme.error.hoverColor};

    &:hover {
      background-color: ${defaultTheme.error.hoverColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.error.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.error.activeColor};
      color: ${defaultTheme.error.textColor};
    }
  `,
  warning: () => `
    color: ${defaultTheme.warning.hoverColor};

    &:hover {
      background-color: ${defaultTheme.warning.hoverColor};
    }

    &:focus {
      outline: 2px solid ${defaultTheme.warning.hoverColor};
    }

    &:active {
      background-color: ${defaultTheme.warning.activeColor};
      color: ${defaultTheme.warning.textColor};
    }
  `,
};

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: ${defaultTheme.primaryColor};

  ${applyStyleModifiers(TERTIARY_MODIFY_CONFIG)};

  &:disabled {
    color: ${defaultTheme.primaryColorDisabled};
    background-color: transparent;
    cursor: not-allowed;
  }
`;

export default Button;
