"use client";

import { createContext, useState, useEffect } from "react";
import {
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

import { auth, provider } from "../config/firebase";

import { IAuth } from "@/types";

const AuthContext = createContext<IAuth | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
      alert("Login successful!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Sign out successful!");
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    handleLogin,
    handleSignOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={valueToShare}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
