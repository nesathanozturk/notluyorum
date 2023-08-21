"use client";

import { IoMdAdd } from "react-icons/io";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const OpenModal = () => {
  const { setIsAddNoteModalOpen } = useNoteContext() as INote;

  return (
    <>
      <button
        onClick={() => setIsAddNoteModalOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-10 sm:right-14 bg-green-600 dark:bg-green-500 z-10 p-4 rounded-full text-[#E8EDED] font-medium transition-colors"
      >
        <IoMdAdd size={21} />
      </button>
    </>
  );
};

export default OpenModal;
