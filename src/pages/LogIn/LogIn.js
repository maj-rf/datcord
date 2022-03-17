import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';

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
      await logIn(email, password);
      setData({ ...data, loading: false });
      navigate('/home');
    } catch (err) {
      setData({ ...data, error: err.message.substring(9) });
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
          <button type="submit" disabled={loading}>
            {loading ? 'Loading..' : 'Log In'}
          </button>
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
