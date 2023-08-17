"use client";

import { useState } from "react";
import { BiSun } from "react-icons/bi";
import Image from "next/image";

import Toggle from "../toggle";
import Modal from "../modal";

import { useAuthContext } from "@/context/AuthContext";

import useToggle from "@/hooks/use-toggle";

import { IAuth, ITheme, IToggle } from "@/types";

import Avatar from "@/assets/avatar.jpg";

const Navbar = () => {
  const { isOpen, setIsOpen, handleOpen, handleClose } = useToggle(
    false
  ) as IToggle;

  const { currentUser } = useAuthContext() as IAuth;

  return (
    <>
      <div className="bg-[#EAEAEA] dark:bg-[#303030] contaier mx-auto navbar py-6 px-5 md:px-16 justify-between border-b-[0.05rem] border-[#F1F1F1] dark:border-[#393939]">
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
      <Modal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
