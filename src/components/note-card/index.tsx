"use client";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const NoteCard = () => {
  const { notes, handleDeleteNote } = useNoteContext() as INote;

  const renderedNoteCard = notes?.map((note) => (
    <div
      key={note.title}
      className="bg-teal-500 dark:bg-teal-600 py-5 px-6 mb-6 md:max-w-[26.3rem] rounded-3xl cursor-pointer hover:bg-opacity-90 transition-colors text-[#343334] dark:text-white relative"
    >
      <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
        <h1 className="text-center sm:text-left font-bold">{note?.title}</h1>
        <span className="px-3 py-[0.7em] sm:px-5 sm:py-[0.9em] bg-teal-700 text-white dark:bg-white rounded-xl text-center dark:text-green-600 font-semibold text-xs uppercase tracking-widest">
          {note?.category}
        </span>
      </div>
      <p className="text-xs leading-6">{note?.description}</p>
      <button
        className="absolute btn btn-sm btn-error left-3 bottom-3 text-white bg-red-600 border-0"
        onClick={() => handleDeleteNote?.(note.id)}
      >
        Kaldır
      </button>
    </div>
  ));

  return renderedNoteCard;
};

export default NoteCard;
