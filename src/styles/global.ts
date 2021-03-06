import { createGlobalStyle } from "styled-components";

import ProximaNovaReg from "../fonts/ProximaNova-Reg.ttf";
import ProximaNovaBold from "../fonts/ProximaNova-Bold.ttf";
import ProximaNovaSBold from "../fonts/ProximaNova-Sbold.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "ProximaNova";
    font-style: normal;
    src: local("ProximaNovaReg"), url(${ProximaNovaReg}) format("truetype");
  }

  @font-face {
    font-family: "ProximaNova Bold";
    font-style: bold;
    src: local("ProximaNovaBold"), url(${ProximaNovaBold});
  }

  @font-face {
    font-family: "ProximaNova SBold";
    src: local("ProximaNovaSBold"), url(${ProximaNovaSBold});
  }

  :root {
    --background: #f2f5f0;
    --button-hover: #f4bc41;
  }

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
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ProximaNova, sans-serif;
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
    cursor: pointer;
  } 
`;
