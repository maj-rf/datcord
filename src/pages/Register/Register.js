import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';
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
      navigate('/');
    } catch (err) {
      setData({ ...data, error: err.message.substring(9) });
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
            type={visibility ? 'text' : 'password'}
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
          <button
            type="button"
            onClick={() => setVisibility((prevState) => !prevState)}
          >
            Show
          </button>
        </div>
        <div>
          <button disabled={loading}>
            {loading ? 'Loading..' : 'Register'}
          </button>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/">
              <button type="button">Log In</button>
            </Link>
          </p>
        </div>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
