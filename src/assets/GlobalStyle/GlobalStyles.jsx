import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

--button-color: #e44848;
--hover-button: #d84343;
--text-button: #fff;
--input: #f7f7f7;
--primary-text: #475467;
--secondary-text: #101828;
--background-equipment: #f2f4f7;
--star: #ffc531;
--transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--grad: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4));
--grey: #F2F4F7;
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
margin: 0 64px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
line-height: 1.5;
font-size: 14px;
background-color: var(--text-button);
color: var(--text-primary-color);
min-height: 100vh;
//overflow: ${({ isModalShown }) => (isModalShown ? 'hidden' : 'visible')};
}



::-webkit-scrollbar-thumb {
  background-color: var(--accent-red);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
  background-color: var(--grey);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button  {
  margin: 0;
  padding: 0;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: currentColor;
}

input,
textarea {
  font-family: inherit;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

button {
  font-family: inherit;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}
`;

export default GlobalStyles;