"use client";

import { createContext, useState, useEffect, useContext } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { useAuthContext } from "./AuthContext";

import { db } from "../config/firebase";

import { IAuth, INote, INoteFeatures } from "@/types";

const NoteContext = createContext<INote | null>(null);

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteFeatures[]>([]);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { currentUser } = useAuthContext() as IAuth;

  const notesRef = collection(db, "notes");

  useEffect(() => {
    const unsubscribe = onSnapshot(notesRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        uid: doc.data().uid,
        title: doc.data().title,
        category: doc.data().category,
        description: doc.data().description,
      }));
      setNotes(data);
    });

    return () => unsubscribe();
  }, []);

  const clearInputs = () => {
    setTitle("");
    setDescription("");
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
    } catch (error) {
      console.log(error);
    }
    clearInputs();
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (error) {
      console.log(error);
    }
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
  };

  return (
    <NoteContext.Provider value={valueToShare}>{children}</NoteContext.Provider>
  );
};

export { NoteProvider };
export default NoteContext;

export const useNoteContext = () => useContext(NoteContext);
