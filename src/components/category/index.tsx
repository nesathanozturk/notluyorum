"use client";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const Category = () => {
  const { notes, filteredNotes, categories, filteredCategories } =
    useNoteContext() as INote;

  const renderedCategories = categories.map((category) => {
    return (
      <div
        key={category?.id}
        onClick={() => filteredCategories(category?.category)}
        className="flex justify-between items-center flex-wrap p-4 px-6 border-b-[0.05rem] border-[#e4e4e4] dark:border-[#505050] cursor-pointer hover:bg-[#393939] hover:bg-opacity-10 dark:hover:bg-opacity-50 transition-all"
      >
        <div className="flex items-center space-x-4">
          <div
            className={`w-5 h-5 ${category?.color} ${category?.darkColor} rounded-full`}
          ></div>
          <span className="font-bold text-[#818181] dark:text-gray-400">
            {category?.category}
          </span>
        </div>
        <span
          className={`w-10 py-[0.3em] ${category?.lengthColor} ${category?.darkLengthColor} rounded-xl text-center text-white font-semibold text-sm`}
        >
          {category?.length}
        </span>
      </div>
    );
  });

  return renderedCategories;
};

export default Category;
