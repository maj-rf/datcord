import { useUserAuth } from '../../context/UserAuthContext';
import { Navigate } from 'react-router-dom';

/*
- checks if user is Authenticated and redirects to 
LogIn if user is not authenticated.
- return to Home otherwise => children.
*/
export default function ProtectedRoute({ children }) {
  let { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
