"use client";

import Modal from "./Modal";
import TextArea from "../inputs/TextArea";
import Input from "../inputs/Input";
import Options from "../options";

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
            <Input title="updatedTitle" inputValue={inputs.updatedTitle} />
            <Options
              title="updatedCategory"
              optionCategory={inputs.updatedCategory}
            />
            <TextArea
              title="updatedDescription"
              inputValue={inputs.updatedDescription}
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
