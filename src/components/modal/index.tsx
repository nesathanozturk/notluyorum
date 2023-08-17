"use client";

import Options from "../options";

import { useThemeContext } from "@/hooks/use-theme-context";
import useToggle from "@/hooks/use-toggle";
import { useNoteContext } from "@/hooks/use-note-context";

import { IModalProps, INote, ITheme } from "@/types";

const Modal: React.FC<IModalProps> = ({ isOpen, handleClose }) => {
  const {
    handleSubmit,
    title,
    setTitle,
    category,
    setCategory,
    description,
    setDescription,
  } = useNoteContext() as INote;
  const { theme, handleThemeChange } = useThemeContext() as ITheme;

  return (
    <dialog
      data-theme={theme === true ? "dark" : "light"}
      className={`modal ${isOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleClose}
        >
          ✕
        </button>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-xl pb-5 text-[#1FB2A6]">Not Oluştur</h3>
          <div className="flex flex-col justify-center space-y-4">
            <input
              type="text"
              placeholder="Notunuz Başlığı"
              className="input input-bordered w-full"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Options category={category} setCategory={setCategory} />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Notunuz İçeriği"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="btn btn-accent">
              Oluştur
            </button>
          </div>
        </form>
        <button onClick={handleClose} className="btn btn-error w-full mt-3">
          İptal Et
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
