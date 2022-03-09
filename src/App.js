import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from './components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/hooks/useDarkMode';
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle</button>
        <h1>Hello, World!</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
