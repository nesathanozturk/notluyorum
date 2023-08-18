"use client";

import Options from "../options";
import Modal from "./Modal";

import { useNoteContext } from "@/context/NoteContext";

import { INote } from "@/types";

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
            <input
              type="text"
              placeholder="Notunuz Başlığı"
              className="input input-bordered w-full"
              name="title"
              value={inputs.title}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
            <Options
              title="category"
              optionCategory={inputs.category}
              inputs={inputs}
              setInputs={setInputs}
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Notunuz İçeriği"
              name="description"
              value={inputs.description}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
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
