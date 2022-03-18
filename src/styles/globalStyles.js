import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html,
body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  overflow-wrap: break-word;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
  transition-property: color, background-color;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
ul,
ol,
p {
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: tomato;
}`;

export const lightTheme = {
  body: '#FFF',
  text: '#36393E',
  secondary: '#D3D7DC',
  accent: '#F2F3F5',
  hovertxt: '#000',
  hoverbg: '#E7EAED',
  form: '#EAEDEF',
};

export const darkTheme = {
  body: '#36393E',
  text: '#DCDDDE',
  secondary: '#202225',
  accent: '#2E3136',
  hovertxt: '#FFF',
  hoverbg: '#33363C',
  form: '#40444A',
};
