"use client";

import { useNoteContext } from "@/context/NoteContext";

import { IInputProps, INote } from "@/types";

const Input: React.FC<IInputProps> = ({ title, inputValue }) => {
  const { inputs, setInputs } = useNoteContext() as INote;

  return (
    <>
      <input
        type="text"
        placeholder="Notunuz Başlığı"
        className="input input-bordered w-full"
        name={title}
        value={inputValue}
        onChange={(e) =>
          setInputs({ ...inputs, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default Input;
