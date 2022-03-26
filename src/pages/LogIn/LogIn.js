import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import styled from 'styled-components';
import {
  StyledSection,
  StyledButton,
  StyledForm,
} from '../../styles/sharedStyles';

const WelcomeDiv = styled.div`
  text-align: center;
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
  const { logIn } = useUserAuth();
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

  return (
    <StyledSection>
      <WelcomeDiv>
        <h1>Welcome to Datcord!</h1>
        <p>It features most of the core functionalities of Discord.</p>
        <ul>
          <li> - Be a member of a server</li>
          <li> - Create channels in a server</li>
          <li> - Send messages to chat</li>
          <li> - See who is online/offline</li>
        </ul>
      </WelcomeDiv>

      <StyledForm onSubmit={handleSubmit}>
        <div>
          <h2>Log In</h2>
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
            Don't have an account?{' '}
            <Link to="/signup">
              <button type="button" className="redirect-btn">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
        {error && <p>{error}</p>}
      </StyledForm>
    </StyledSection>
  );
}
