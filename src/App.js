import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import ProtectedRoute from './pages/ProtectedRoute.js/ProtectedRoute';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home toggleTheme={toggleTheme} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
