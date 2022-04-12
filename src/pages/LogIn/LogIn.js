import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import styled from 'styled-components';
import {
  StyledSection,
  StyledButton,
  StyledForm,
  StyledDiv,
} from '../../styles/sharedStyles';

const WelcomeDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    color: #5765f2;
  }
`;

export default function LogIn() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });
  const { user, logIn } = useUserAuth();
  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, loading: true });
    try {
      const res = await logIn(email, password);
      await updateDoc(doc(db, 'users', res.user.uid), {
        isOnline: true,
      });
      setData({ ...data, loading: false });
      navigate('/home');
    } catch (err) {
      setData({ ...data, error: err.message.substring(9) });
    }
  };

  //reroute to home of user changes URL to login
  useEffect(() => {
    let unsub = true;
    function goHome() {
      if (user) return navigate('/home');
    }
    goHome();
    return () => unsub;
  }, [user, navigate]);

  return (
    <StyledSection>
      <StyledDiv>
        <WelcomeDiv>
          <h1>Datcord</h1>
          <p>A Discord Clone</p>
          <ul>
            Core Features:
            <li> - Become a member of a server</li>
            <li> - Create channels in a server</li>
            <li> - Send messages to chat</li>
            <li> - See who is online/offline</li>
          </ul>
          <div>
            <a href="https://github.com/bananabread08/datcord">
              Check Repository
            </a>
          </div>
        </WelcomeDiv>

        <StyledForm onSubmit={handleSubmit}>
          <div>
            <h2>Welcome Back!</h2>
          </div>
          <div>
            <input
              type="Email"
              onChange={handleChange}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="pass-container">
            <input
              type={visibility ? 'text' : 'password'}
              onChange={handleChange}
              placeholder="Password"
              name="password"
            />
            <StyledButton
              type="button"
              onClick={() => setVisibility((prevState) => !prevState)}
              className="show-btn"
            >
              Show
            </StyledButton>
          </div>
          <div>
            <StyledButton submit type="submit" disabled={loading}>
              {loading ? 'Loading..' : 'Log In'}
            </StyledButton>
          </div>
          <div>
            <p>
              Need an account?{' '}
              <Link to="/signup">
                <button type="button" className="redirect-btn">
                  Register
                </button>
              </Link>
            </p>
          </div>
          {error && <p>{error}</p>}
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  );
}
