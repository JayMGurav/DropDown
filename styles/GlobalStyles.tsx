import { createGlobalStyle } from "styled-components";

const GloBalStyles = createGlobalStyle`
  :root {
    --background: #242526;
    --foreground: #484a4d;
    --speed: 250ms;
  }

  body {
    width: 100%;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #eee;
  }
  *+*{
    box-sizing: border-box;
  }
`;


export default GloBalStyles;