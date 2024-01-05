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

// User data type interface
type UserType = {
  email: string | null;
  uid: string | null;
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

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };
  // Sign up the user
  const signUpWithLocal = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login the user
  const signInWithLocal = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout the user
  const logOut = () => {
    try {
      setUser({ email: null, uid: null });
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
