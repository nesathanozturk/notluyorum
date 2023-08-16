"use client";

import { TbLogout } from "react-icons/tb";

import Toggle from "@/components/toggle";

import useWindowSize from "@/hooks/use-window-size";

const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className="navbar pt-4">
      <nav className="container mx-auto md:px-6 justify-between flex-wrap">
        <h1
          title="Notluyorum"
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text cursor-pointer"
        >
          Notluyorum
        </h1>
        <div className="flex items-center space-x-4">
          <Toggle />
          <button className="btn btn-primary tracking-widest text-xs md:text-sm">
            {width > 480 ? "Çıkış Yap" : <TbLogout size={23} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
