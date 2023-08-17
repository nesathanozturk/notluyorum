"use client";

import { TbLogout, TbLogin } from "react-icons/tb";

import AuthButton from "@/components/auth-button";
import Toggle from "@/components/toggle";

import { useAuthContext } from "@/context/AuthContext";

import useWindowSize from "@/hooks/use-window-size";

import { IAuth } from "@/types";

const Header = () => {
  const { currentUser, handleSignOut, handleLogin } = useAuthContext() as IAuth;

  return (
    <header className="navbar pt-4">
      <nav className="container mx-auto px-3 md:px-6 justify-between flex-wrap">
        <h1
          title="Notluyorum"
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text cursor-pointer"
        >
          Notluyorum
        </h1>
        <div className="flex items-center space-x-4">
          <Toggle />
          {currentUser ? (
            <AuthButton
              handleClick={handleSignOut}
              authStatus="Çıkış Yap"
              Icon={TbLogout}
            />
          ) : (
            <AuthButton
              handleClick={handleLogin}
              authStatus="Giriş Yap"
              Icon={TbLogin}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
