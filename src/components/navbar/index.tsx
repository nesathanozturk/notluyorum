"use client";

import { useState } from "react";
import { BiSun } from "react-icons/bi";
import Image from "next/image";

import Modal from "../modal";

import useToggle from "@/hooks/use-toggle";
import { useThemeContext } from "@/hooks/use-theme-context";

import { ITheme, IToggle } from "@/types";

const Navbar = () => {
  const { isOpen, setIsOpen, handleOpen, handleClose } = useToggle(
    false
  ) as IToggle;

  const { handleThemeChange } = useThemeContext() as ITheme;

  return (
    <>
      <div className="contaier mx-auto navbar py-6 px-5 md:px-16 justify-between border-b-[0.05rem] border-[#393939]">
        <div className="avatar space-x-4">
          <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 cursor-pointer">
            <Image
              src="https://avatars.githubusercontent.com/u/107864503?v=4"
              alt="Avatar"
              width={40}
              height={40}
            />
          </div>
          <span className="font-bold text-gray-200 text-xs sm:text-sm">
            Neşathan Öztürk
          </span>
        </div>
        <div className="flex space-x-3">
          <input
            type="checkbox"
            className="toggle"
            onClick={handleThemeChange}
          />
          <button
            onClick={handleOpen}
            className="btn-accent py-2 px-4 rounded-lg capitalize text-[#1f2d2b] font-medium text-xs md:text-sm transition-colors"
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
