"use client";

import useToggle from "@/hooks/use-toggle";
import useInput from "@/hooks/use-input";

import { IInput, IModalProps } from "@/types";

const Modal: React.FC<IModalProps> = ({ isOpen, handleClose }) => {
  const INITIAL_STATE = {
    title: "",
    category: "",
    description: "",
  };
  const { value, setValue, handleChange } = useInput(INITIAL_STATE) as IInput;

  return (
    <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleClose}
        >
          ✕
        </button>
        <form>
          <h3 className="font-bold text-xl pb-5 text-[#1FB2A6]">Not Oluştur</h3>
          <div className="flex flex-col justify-center space-y-4">
            <input
              type="text"
              placeholder="Notunuz Başlığı"
              className="input input-bordered w-full"
              name="title"
              value={value.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Notunuz Kategorisi"
              className="input input-bordered w-full"
              name="category"
              value={value.category}
              onChange={handleChange}
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Notunuz İçeriği"
              value={value.description}
            />
            <button type="submit" className="btn btn-accent">
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
