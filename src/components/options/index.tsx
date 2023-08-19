"use client";

import { useNoteContext } from "@/context/NoteContext";

import { IInputProps, INote } from "@/types";

import { options } from "@/utils/data";

const Options: React.FC<IInputProps> = ({ title, inputValue }) => {
  const { inputs, setInputs } = useNoteContext() as INote;

  const renderedOptions = (
    <select
      name={title}
      value={inputValue}
      onChange={(e) =>
        setInputs({ ...inputs, [e.target.name]: e.target.value })
      }
      className="select select-bordered w-full"
    >
      <option value="" disabled>
        Notunuzun Kategorisi
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.title}>
          {option.title}
        </option>
      ))}
    </select>
  );

  return renderedOptions;
};

export default Options;
