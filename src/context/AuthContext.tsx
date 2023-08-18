"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import {
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth, provider } from "../config/firebase";

import { IAuth, IUser } from "@/types";

const AuthContext = createContext<IAuth | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      await signInWithRedirect(auth, provider);
      alert("Login successful!");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut(auth);
      alert("Sign out successful!");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        router.push("/notes");
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const valueToShare = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    handleLogin,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={valueToShare}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;

export const useAuthContext = () => useContext(AuthContext);
