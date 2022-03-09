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
  body: '#fff',
  text: '#2E3337',
  secondary: '#F2F3F5',
  accent: '#D3D7DC',
};

export const darkTheme = {
  text: '#DCDDDE',
  body: '#36393E',
  secondary: '#2E3136',
  accent: '#393C42',
};
