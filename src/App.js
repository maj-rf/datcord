import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from './components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/hooks/useDarkMode';
import styled from 'styled-components';

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
const StyledNav = styled.nav`
  height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    min-height: 50px;
    min-width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.text};
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-radius: 25%;
      color: ${(props) => props.theme.hovertxt};
    }
  }
`;

const StyledMain = styled.main`
  display: flex;
  width: 100%;
`;

const Channels = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex-shrink: 0;
  flex-basis: 200px;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;

    li {
      padding: 0.25rem;
      cursor: pointer;
    }
    & li:hover {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.hovertxt};
    }
  }
`;

const ChatPanel = styled.section`
  flex-basis: 100%;
`;

const UserPanel = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex-shrink: 0;
  flex-basis: 200px;
`;
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <StyledNav>
          <ul>
            <li>
              <button onClick={toggleTheme}>Mode</button>
            </li>
            <li>
              <button>Click</button>
            </li>
            <li>
              <button>Click</button>
            </li>
            <li>
              <button>Click</button>
            </li>
            <li>
              <button>Click</button>
            </li>
          </ul>
        </StyledNav>

        <StyledMain>
          <Channels>
            <h3>Playground</h3>
            <ul>
              <span>v Text Channel</span>
              <li># general</li>
              <li># spam-city</li>
              <li># off-topic</li>
              <li># channel</li>
            </ul>

            <ul>
              <span>v Gaming</span>
              <li># Switch</li>
              <li># PS</li>
              <li># Xbox</li>
              <li># PC</li>
            </ul>
          </Channels>
          <ChatPanel>
            <h1>Hello, World!</h1>
          </ChatPanel>
          <UserPanel>
            <ul>
              <li>User</li>
              <li>User</li>
              <li>User</li>
              <li>User</li>
            </ul>
          </UserPanel>
        </StyledMain>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
