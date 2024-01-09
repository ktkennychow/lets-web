'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import axios from 'axios';

// User data type interface
type UserType = {
  email: string | null;
  uid: string | null;
  username: string | null;
};

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext<any>(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Define the constants for the user and loading state
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const backendURL = process.env.NEXT_PUBLIC_backendURL;

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          username: null,
        });
        const getUsername = async () => {
          const savedUser = await axios.get(`${backendURL}/users/${user.uid}`);
          console.log(savedUser.data.username);
          if (savedUser.data.username) {
            setUser({ ...user, username: savedUser.data.username });
          }
        };
        getUsername();
      } else {
        setUser(null);
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, [backendURL]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);

      const savedUser = await axios.get(`${backendURL}/users/${user.uid}`);
      if (savedUser.data) {
        setUser({ ...user, username: savedUser.data.username });
      } else {
        axios.post(`${backendURL}/users`, {
          firebase_uid: user.uid,
          email: user.email,
          username: user.displayName,
        });
        setUser({ ...user, username: user.displayName });
      }
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  // Sign up the user
  const signUpWithLocal = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        let username = user.email?.split('@')[0];
        axios.post(`${backendURL}/users`, {
          firebase_uid: user.uid,
          email: user.email,
          username: username,
        });
        setUser({ ...user, username: username! });
      }
    } catch (error) {
      console.error('Error signing up with Local', error);
    }
  };

  // Login the user
  const signInWithLocal = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const savedUser = await axios.get(`${backendURL}/users/${user.uid}`);
      if (savedUser.data) {
        setUser({ ...user, username: savedUser.data.username });
      }
    } catch (error) {
      console.error('Error signing in with Local', error);
    }
  };

  // Logout the user
  const logOut = () => {
    try {
      setUser({ email: null, uid: null, username: null });
      signOut(auth);
    } catch (error) {
      console.error('Error signing out with Google', error);
    }
  };

  // Wrap the children with the context provider
  return (
    <AuthContext.Provider
      value={{ user, signInWithLocal, signUpWithLocal, logOut, signInWithGoogle }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
