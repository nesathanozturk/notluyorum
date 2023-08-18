"use client";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Options from "../options";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";
import TextArea from "../inputs/TextArea";

const AddModal = () => {
  const {
    isAddNoteModalOpen,
    setIsAddNoteModalOpen,
    handleSubmit,
    inputs,
    setInputs,
  } = useNoteContext() as INote;

  const handleClose = () => {
    setIsAddNoteModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isAddNoteModalOpen} handleClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-xl pb-5 text-[#1FB2A6]">Not Oluştur</h3>
          <div className="flex flex-col justify-center space-y-4">
            <Input title="title" inputValue={inputs.title} />
            <Options title="category" optionCategory={inputs.category} />
            <TextArea title="description" inputValue={inputs.description} />
            <button type="submit" className="btn btn-accent">
              Oluştur
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddModal;
