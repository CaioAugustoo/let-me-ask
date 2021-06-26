import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root[data-theme="light"] {
    --main: #f8f8f8;
    --brand-bg: #853afd;
    --google-red: #ea4335;
    --gray: #a8a8b3;
    --main-text: #29292e;
    --secondary-text: #737380;
    --auth-link: #e559f9;
    --text-area: #fefefe;
    --question: #ffff;
    --question-answered: #dbdcdd;
    --question-highlighted: #f4f0ff;
    --borders: #e2e2e2;
    --new-room-link: #737380;
    --input: #fff;
    --shimmer-bg: #E3E3E3;
    --shimmer-color: #fff;
    --toast-bg: #fff;
    --toast-color: #363636;

    --font-main: 'Roboto', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
    --font-regular: 400;
    --font-medium: 500;
  }

  :root[data-theme="dark"] {
    --main: #15151c;
    --brand-bg: #853afd;
    --google-red: #ea4335;
    --gray: #a8a8b3;
    --main-text: #f8f8f8;
    --secondary-text: #737380;
    --auth-link: #e559f9;
    --text-area: #1d1d26;
    --question: #1d1d26;
    --question-answered: #242432;
    --question-highlighted: #242432;
    --borders: #1d1d26;
    --new-room-link: #a8a8b3;
    --input: #1d1d26;
    --shimmer-bg: #15151c;
    --shimmer-color: #1d1d26;
    --toast-bg: #1d1d26;
    --toast-color: #fff;

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

  body, input, button, textarea, button::placeholder {
    font: var(--font-regular) 16px var(--font-main);
  }
`;
