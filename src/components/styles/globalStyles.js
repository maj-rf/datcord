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
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
}
`;

export const lightTheme = {
  body: '#FFF',
  text: '#36393E',
  secondary: '#F2F3F5',
  accent: '#D3D7DC',
  hovertxt: '#000',
};

export const darkTheme = {
  text: '#DCDDDE',
  body: '#36393E',
  secondary: '#202225',
  accent: '#2E3136',
  hovertxt: '#FFF',
};
