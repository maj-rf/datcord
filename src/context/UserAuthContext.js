import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase-config';
/***
A UserAuthContext that includes most Firebase's authentication methods 
- signUp, logIn, logOut
- onAuthChange that listens for user auth changes.
-returns a ContextProvider Wrapper. 
***/
const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    setUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (x) => {
      //console.log('Auth', x);
      setUser(x);
    });
    return () => unsub();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
