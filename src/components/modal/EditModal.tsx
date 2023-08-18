"use client";

import Options from "../options";
import Modal from "./Modal";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

const EditModal = () => {
  const {
    isEditModalOpen,
    setIsEditModalOpen,
    inputs,
    setInputs,
    handleEditNote,
    selectedNote,
  } = useNoteContext() as INote;

  const handleClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isEditModalOpen} handleClose={handleClose}>
        <div>
          <h3 className="font-bold text-xl pb-5 text-[#1FB2A6]">Not Düzenle</h3>
          <div className="flex flex-col justify-center space-y-4">
            <input
              type="text"
              placeholder="Notunuz Başlığı"
              className="input input-bordered w-full"
              name="updatedTitle"
              value={inputs.updatedTitle}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
            <Options
              title="updatedCategory"
              optionCategory={inputs.updatedCategory}
              inputs={inputs}
              setInputs={setInputs}
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Notunuz İçeriği"
              name="updatedDescription"
              value={inputs.updatedDescription}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
            <button
              type="submit"
              className="btn btn-accent"
              onClick={() => handleEditNote(selectedNote)}
            >
              Düzenle
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
