"use client";

import { TiDelete } from "react-icons/ti";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const NoteCard = () => {
  const { notes, handleDeleteNote } = useNoteContext() as INote;

  const renderedNoteCard = notes?.map((note) => (
    <div
      key={note?.id}
      className="bg-teal-500 dark:bg-teal-600 py-5 px-6 mb-6 md:max-w-[26.3rem] rounded-3xl cursor-pointer hover:bg-opacity-90 transition-colors text-[#343334] dark:text-white relative"
    >
      <button
        className="absolute right-3 top-1 text-teal-900 dark:text-white"
        onClick={() => handleDeleteNote?.(note?.id)}
      >
        <TiDelete size={30} />
      </button>
      <div className="flex justify-between items-center flex-wrap gap-2 mt-6 mb-2">
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
        <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
          Henüz not yok!
        </div>
      ) : (
        renderedNoteCard
      )}
    </>
  );
};

export default NoteCard;
