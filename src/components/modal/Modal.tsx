"use client";

import { useThemeContext } from "@/context/ThemeContext";

import { IModalProps, ITheme } from "@/types";

const Modal: React.FC<IModalProps> = ({ isOpen, handleClose, children }) => {
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
        {children}
        <button onClick={handleClose} className="btn btn-error w-full mt-3">
          İptal Et
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
