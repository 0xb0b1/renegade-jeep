import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;

    @media (max-width: 1080px) {
      font-size: 93.5%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  body,
  input,
  textarea,
  button {
    font-weight: 400;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  li {
    transition: color 0.3s;

    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--button-hover);
    }
  }
`;
