import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import ProtectedRoute from './pages/ProtectedRoute.js/ProtectedRoute';
import Home from './pages/Home/Home';
import Channels from './components/Channels/Channels';
import ChatPanel from './components/ChatPanel/ChatPanel';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'servers'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setServers(data);
    });
    return unsub;
  }, []);

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
                  <Home toggleTheme={toggleTheme} servers={servers} />
                </ProtectedRoute>
              }
            >
              <Route index element={<ChatPanel />} />
              <Route path=":channelId" element={<ChatPanel />} />
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
