import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
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
