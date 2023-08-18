"use client";

import { useNoteContext } from "@/context/NoteContext";

import { IInputProps, INote } from "@/types";

const TextArea: React.FC<IInputProps> = ({ title, inputValue }) => {
  const { inputs, setInputs } = useNoteContext() as INote;

  return (
    <>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Notunuz İçeriği"
        name={title}
        value={inputValue}
        onChange={(e) =>
          setInputs({ ...inputs, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default TextArea;
