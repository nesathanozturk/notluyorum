"use client";

import { TbLogout } from "react-icons/tb";

import Toggle from "@/components/toggle";

import { useAuthContext } from "@/context/AuthContext";

import useWindowSize from "@/hooks/use-window-size";

import { IAuth } from "@/types";

const Header = () => {
  const { currentUser, handleSignOut } = useAuthContext() as IAuth;

  const { width } = useWindowSize();

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
          {currentUser && (
            <button
              onClick={handleSignOut}
              className="btn btn-primary tracking-widest capitalize"
            >
              {width > 480 ? "Çıkış Yap" : <TbLogout size={23} />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
