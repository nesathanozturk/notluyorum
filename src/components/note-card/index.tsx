"use client";

import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

import EditModal from "../modal/EditModal";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const NoteCard = () => {
  const {
    notes,
    isEditModalOpen,
    setIsEditModalOpen,
    handleDeleteNote,
    handleSelectedNote,
  } = useNoteContext() as INote;

  const handleOpen = (id: string) => {
    setIsEditModalOpen(true);
    handleSelectedNote?.(id);
  };

  const renderedNoteCard = notes?.map((note) => (
    <div
      key={note?.id}
      className="bg-teal-500 dark:bg-teal-600 py-5 px-6 mb-6 md:!max-w-[26.3rem] rounded-3xl cursor-pointer hover:bg-opacity-80 hover:dark:bg-opacity-70 transition-colors text-[#343334] dark:text-white"
    >
      <div className="flex justify-end items-center">
        <button
          className="text-teal-900 dark:text-white mr-2"
          onClick={() => handleOpen(note?.id)}
          title="Düzenle"
        >
          <AiFillEdit size={30} />
        </button>
        <button
          className="text-teal-900 dark:text-white"
          onClick={() => handleDeleteNote?.(note?.id)}
          title="Sil"
        >
          <TiDelete size={30} />
        </button>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <h1 className="text-center sm:text-left font-bold">{note?.title}</h1>
        <span className="px-3 py-[0.7em] sm:px-5 sm:py-[0.9em] bg-teal-700 text-white dark:bg-white rounded-xl text-center dark:text-green-600 font-semibold text-xs uppercase tracking-widest">
          {note?.category}
        </span>
      </div>
      <p className="text-xs leading-6">{note?.description}</p>
    </div>
  ));

  return (
    <>
      {notes?.length < 1 ? (
        <div className="text-2xl font-bold text-gray-500 dark:text-gray-400">
          <p>Henüz notunuz yok!</p>
        </div>
      ) : (
        renderedNoteCard
      )}
      <EditModal />
    </>
  );
};

export default NoteCard;
