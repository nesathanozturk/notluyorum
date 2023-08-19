"use client";

import { useState } from "react";
import { BiSun } from "react-icons/bi";
import Image from "next/image";

import Toggle from "../toggle";

import { useAuthContext } from "@/context/AuthContext";
import { useNoteContext } from "@/context/NoteContext";

import { IAuth, INote } from "@/types";

import Avatar from "@/assets/avatar.jpg";

const Navbar = () => {
  const { isAddNoteModalOpen, setIsAddNoteModalOpen } =
    useNoteContext() as INote;

  const { currentUser } = useAuthContext() as IAuth;

  const handleOpen = () => {
    setIsAddNoteModalOpen(true);
  };

  return (
    <>
      <div className="bg-[#EAEAEA] dark:bg-[#303030] contaier mx-auto navbar py-6 px-5 md:px-16 justify-between border-b-[0.05rem] border-[#e4e4e4] dark:border-[#505050]">
        <div className="avatar space-x-4">
          <div className="w-10 rounded-full ring ring-black dark:ring-accent ring-offset-base-100 ring-offset-2 cursor-pointer">
            <Image
              src={currentUser?.photoURL ?? Avatar}
              alt={currentUser?.displayName ?? "Kullanıcı"}
              width={40}
              height={40}
            />
          </div>
          <span className="font-bold text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
            {currentUser?.displayName ?? "Kullanıcı"}
          </span>
        </div>
        <div className="flex space-x-3">
          <Toggle />
          <button
            onClick={handleOpen}
            className="btn-accent py-2 px-4 rounded-lg capitalize text-[#E8EDED] dark:text-[#1f2d2b] font-medium text-xs md:text-sm transition-colors"
          >
            Not Oluştur
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
