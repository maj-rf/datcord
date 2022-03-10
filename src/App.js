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

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Sidebar toggleTheme={toggleTheme} />
        <StyledMain>
          <Channels />
          <ChatPanel />
          <UserPanel />
        </StyledMain>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
