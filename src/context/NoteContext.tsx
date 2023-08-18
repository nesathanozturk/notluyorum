"use client";

import { createContext, useState, useEffect, useContext, useMemo } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import { useAuthContext } from "./AuthContext";

import { db } from "../config/firebase";

import { IAuth, INote, INoteFeatures } from "@/types";

const NoteContext = createContext<INote | null>(null);

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteFeatures[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<INoteFeatures[]>([]);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { currentUser } = useAuthContext() as IAuth;

  const notesRef = collection(db, "notes");

  useEffect(() => {
    const getNotes = () => {
      const unsubscribe = onSnapshot(notesRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc?.id,
          uid: doc.data()?.uid,
          title: doc.data()?.title,
          category: doc.data()?.category,
          description: doc.data()?.description,
        }));
        const filteredData = data?.filter(
          (note) => note?.uid === currentUser?.uid
        );
        setNotes(filteredData);
        setFilteredNotes(filteredData);
      });

      return () => unsubscribe();
    };

    getNotes();
  }, []);

  const clearInputs = () => {
    setTitle("");
    setCategory("");
    setDescription("");
  };

  const handleSuccess = (desc: string) => {
    toast.success(desc, {
      position: "top-right",
    });
  };

  const handleError = (desc: string) => {
    toast.error(desc, {
      position: "top-right",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const uid = currentUser?.uid;

      await addDoc(collection(db, "notes"), {
        id: uuidv4().toString(),
        uid,
        title,
        category,
        description,
      });
      handleSuccess("Not başarıyla oluşturuldu!");
    } catch (error) {
      console.log("Error:", error);
      handleError("Not oluşturulurken bir hata oluştu!");
    }
    clearInputs();
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));
      handleSuccess("Not başarıyla silindi!");
    } catch (error) {
      console.log("Error:", error);
      handleError("Not silinirken bir hata oluştu!");
    }
  };

  const filteredCategories = (category: string) => {
    if (!notes) {
      return;
    }

    if (category === "Tüm Notlar") {
      setNotes(filteredNotes);
      return;
    }
    const filteredNotesByCategory = filteredNotes?.filter(
      (note) => note?.category === category
    );
    setNotes(filteredNotesByCategory);
  };

  const valueToShare = {
    notes,
    setNotes,
    handleSubmit,
    handleDeleteNote,
    title,
    setTitle,
    category,
    setCategory,
    description,
    setDescription,
    filteredCategories,
  };

  return (
    <NoteContext.Provider value={valueToShare}>{children}</NoteContext.Provider>
  );
};

export { NoteProvider };
export default NoteContext;

export const useNoteContext = () => useContext(NoteContext);
