import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main: #f8f8f8;
    --brand-bg: #853afd;
    --google-red: #ea4335;
    --gray: #a8a8b3;
    --main-text: #29292e;

    --font-main: 'Roboto', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
    --font-regular: 400;
    --font-medium: 500;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main);
    color: var(--main-text);
  }

  body, input, button, textarea {
    font: var(--font-regular) 16px var(--font-main);
  }
`;
