import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Channels from './components/Channels/Channels';
import ChatPanel from './components/ChatPanel/ChatPanel';
import UserPanel from './components/UserPanel/UserPanel';
import { useRef, useState } from 'react';
import { signup, login, logout, useAuth } from './firebase-config';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  ul,
  li,
  h3 {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const StyledMain = styled.main`
  display: flex;
  width: 100%;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [loading, setLoading] = useState(false);
  const user = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  }

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {user ? (
          <>
            <Sidebar toggleTheme={toggleTheme} />
            <StyledMain>
              <Channels user={user} logout={handleLogout} loading={loading} />
              <ChatPanel />
              <UserPanel user={user} />
            </StyledMain>
          </>
        ) : (
          <div>
            <div className="fields">
              <input ref={emailRef} placeholder="Email" />
              <input ref={passwordRef} type="password" placeholder="Password" />
            </div>
            {loading ? (
              <div>Logging In...</div>
            ) : (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <button onClick={handleLogin}>Log In</button>
              </>
            )}
          </div>
        )}
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
