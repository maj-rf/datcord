import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import Sidebar from './components/Sidebar/Sidebar';
import Channels from './components/Channels/Channels';
import ChatPanel from './components/ChatPanel/ChatPanel';
import UserPanel from './components/UserPanel/UserPanel';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  useUserAuth,
  UserAuthContextProvider,
} from './context/UserAuthContext';

//checks if user is Authenticated
function ProtectedRoute({ children }) {
  let { user } = useUserAuth();
  if (!user) {
    <Navigate to="/" />;
  }
  return children;
}

function Home({ toggleTheme }) {
  return (
    <>
      <Sidebar toggleTheme={toggleTheme} />
      <Channels />
      <ChatPanel />
      <UserPanel />
    </>
  );
}

function LogIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });
  const { logIn } = useUserAuth();
  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/home');
    } catch (err) {
      setData({ ...data, error: err.message });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <button disabled={loading}>{loading ? 'Loading..' : 'Log In'}</button>
        </div>
        <div>
          <p>
            Don't have an account?<Link to="/signup">Sign Up</Link>
          </p>
        </div>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });
  const { signUp } = useUserAuth();
  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setData({ ...data, error: err.message });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <button disabled={loading}>
            {loading ? 'Loading..' : 'Register'}
          </button>
        </div>
        <div>
          <p>
            Already have an account?<Link to="/">Log In</Link>
          </p>
        </div>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}

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
