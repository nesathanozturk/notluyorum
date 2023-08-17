"use client";

import { createContext, useState, useEffect } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useAuthContext } from "@/hooks/use-auth-context";

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

    if (!title || !category || description) {
      alert("Bir not giriniz!");
      return;
    }

    try {
      const uid = currentUser?.uid;

      await addDoc(collection(db, "notes"), {
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
