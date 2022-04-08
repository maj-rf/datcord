import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';
import {
  StyledSection,
  StyledButton,
  StyledForm,
  StyledDiv,
} from '../../styles/sharedStyles';

export default function Register() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);
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
    setData({ ...data, loading: true });
    try {
      const res = await signUp(email, password);
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: false,
      });
      setData({ ...data, loading: false });
      navigate('/home');
    } catch (err) {
      setData({ ...data, error: err.message.substring(9) });
    }
  };

  return (
    <StyledSection>
      <StyledDiv>
        <StyledForm onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <div>
            <input
              type="email"
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
            <StyledButton submit disabled={loading}>
              {loading ? 'Loading..' : 'Register'}
            </StyledButton>
          </div>
          <div>
            <p>
              Already have an account?{' '}
              <Link to="/login">
                <button type="button" className="redirect-btn">
                  Log In
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
