import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInAnonymously,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyDlVBZydTdLMMxm-YMSrCOCxe8_9bD5KbU',
  authDomain: 'datcord-ef16b.firebaseapp.com',
  projectId: 'datcord-ef16b',
  storageBucket: 'datcord-ef16b.appspot.com',
  messagingSenderId: '131296865923',
  appId: '1:131296865923:web:2e924ad1c6c28ec3f0b5b6',
  measurementId: 'G-FDS07LHTL0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function signinAsGuest() {
  return signInAnonymously();
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
