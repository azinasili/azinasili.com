import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  // [1] Percentage is used for better a11y and scalability.
  // Project uses \`em\` CSS units. Using a percentage value
  // allows users to override \`font-size\` with their browser settings.
  :root {
    --app-primary-font-family: 'Courier Prime', monospace;
    --app-background-color: hsla(0, 0, 100, 1);
    --app-font-weight: 400;
    --app-line-height: 1.65;
    --app-text-color: hsla(218, 22, 20, 1);

    --app-font-scaler: 115%; // [1]
    --heading1-font-size: 2.488em;
    --heading2-font-size: 2.074em;
    --heading3-font-size: 1.728em;
    --heading4-font-size: 1.44em;
    --heading5-font-size: 1.2em;
    --heading6-font-size: 1em;
    --small-font-size: 0.833em;

    --heading-font-weight: 700;
    --heading-line-height: 1.15;
    --heading-margin-bottom: 1.05rem;
    --heading-margin-top: 2.75rem;
    --paragraph-margin-bottom: 1.15rem;
  }

  :root {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  /**
   * This element wraps each page. It's being utilized to create the layout
   * of a background img/color spanning the entire page.
   */
  #__next {
    display: flex;
    flex-direction: column;
    height: 100vh;

    & > :first-child {
      flex: 1;
    }
  }

  body {
    background-color: var(--app-background-color);
    color: var(--app-text-color);
    font-family: var(--app-primary-font-family);
    font-size: var(--app-font-scaler);
    font-weight: var(--app-font-weight);
    line-height: var(--app-line-height);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--heading-font-weight);
    line-height: var(--heading-line-height);
    margin-bottom: var(--heading-margin-bottom);
    margin-top: var(--heading-margin-top);
  }

  h1 {
    font-size: var(--heading1-font-size);
  }

  h2 {
    font-size: var(--heading2-font-size);
  }

  h3 {
    font-size: var(--heading3-font-size);
  }

  h4 {
    font-size: var(--heading4-font-size);
  }

  h5 {
    font-size: var(--heading5-font-size);
  }

  h6 {
    font-size: var(--heading6-font-size);
  }

  p {
    margin-bottom: var(--paragraph-margin-bottom);
  }

  small {
    font-size: var(--small-font-size);
  }
`;

export default GlobalStyles;
