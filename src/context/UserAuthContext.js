import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import Loading from '../components/Loading/Loading';
/***
A UserAuthContext that includes most Firebase's authentication methods 
- signUp, logIn, logOut
- onAuthChange that listens for user auth changes.
-returns a ContextProvider Wrapper. 
***/
const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (x) => {
      setLoad(false);
      setUser(x);
    });
    return () => unsub();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {load ? <Loading /> : children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
