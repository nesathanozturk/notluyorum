"use client";

import { useState } from "react";
import { BiSun } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import Toggle from "../toggle";

import { useAuthContext } from "@/context/AuthContext";
import { useNoteContext } from "@/context/NoteContext";
import { useThemeContext } from "@/context/ThemeContext";

import { IAuth, INote, ITheme } from "@/types";

import Avatar from "@/assets/avatar.jpg";

const Navbar = () => {
  const { isAddNoteModalOpen, setIsAddNoteModalOpen } =
    useNoteContext() as INote;
  const { currentUser, handleSignOut } = useAuthContext() as IAuth;
  const { theme } = useThemeContext() as ITheme;

  const handleOpen = () => {
    setIsAddNoteModalOpen(true);
  };

  return (
    <>
      <div className="bg-[#EAEAEA] dark:bg-[#303030] navbar py-6 px-5 md:px-16 flex-wrap flex-col items-center space-y-2 xs:space-y-0 xs:flex-row xs:justify-between border-b-[0.05rem] border-[#e4e4e4] dark:border-[#505050]">
        <div className="avatar space-x-4">
          <div className="w-10 h-full rounded-full ring mb-2 ring-black dark:ring-accent ring-offset-base-100 ring-offset-2 cursor-pointer">
            <Image
              src={currentUser?.photoURL ?? Avatar}
              alt={currentUser?.displayName ?? "Kullanıcı"}
              width={40}
              height={40}
              title={currentUser?.displayName ?? "Kullanıcı"}
            />
          </div>
          <span className="font-bold text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
            {currentUser?.displayName ?? "Kullanıcı"}
          </span>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Link
            className="font-semibold text-gray-600 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-500 text-sm sm:text-base transition-all"
            href="/"
          >
            Ana Sayfa
          </Link>
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
