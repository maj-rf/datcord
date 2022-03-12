import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from './components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/hooks/useDarkMode';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Channels from './components/Channels/Channels';
import ChatPanel from './components/ChatPanel/ChatPanel';
import UserPanel from './components/UserPanel/UserPanel';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase-config';
const Wrapper = styled.div`
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
  const [logState, setLogState] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPass, setRegisterPass] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );
      setLogState(true);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      setLogState(true);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
    setLogState(false);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {user ? (
          <>
            <Sidebar toggleTheme={toggleTheme} />
            <StyledMain>
              <Channels user={user} logout={logout} />
              <ChatPanel />
              <UserPanel />
            </StyledMain>
          </>
        ) : (
          <div>
            <div>
              <p>Register</p>
              <input
                placeholder="Email..."
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <input
                placeholder="Password..."
                onChange={(e) => setRegisterPass(e.target.value)}
              />
              <button onClick={register}>Create User</button>
            </div>
            <div>
              <p>Sign-In</p>
              <input
                placeholder="Email..."
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                placeholder="Password..."
                onChange={(e) => setLoginPass(e.target.value)}
              />
              <button onClick={login}>Log-in</button>
            </div>
          </div>
        )}
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
