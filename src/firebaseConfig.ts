import { initializeApp } from 'firebase/app';
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { toast } from './components/Toast/Toast';

export const firebaseConfig = {
  apiKey: 'AIzaSyBbAs4hpsC8u09jdJFVKJugL0PV16ZBJJY',
  authDomain: 'walk-67a21.firebaseapp.com',
  projectId: 'walk-67a21',
  storageBucket: 'walk-67a21.appspot.com',
  messagingSenderId: '340771813609',
  appId: '1:340771813609:web:af2a56ad6f135b72bc5878',
  measurementId: 'G-6L3J8FYDBE',
};

export async function loginUser(username: string, password: string) {
  const auth = getAuth();
  try {
    const email = username;
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  const auth = getAuth();
  try {
    const email = username;
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    toast(error.message, 4000);
    return false;
  }
}
