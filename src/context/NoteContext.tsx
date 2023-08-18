"use client";

import { createContext, useState, useEffect, useContext, useMemo } from "react";
import {
  doc,
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
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
  const [edit, setEdit] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const [updatedCategory, setUpdatedCategory] = useState<string>("");
  const [updatedDescription, setUpdatedDescription] = useState<string>("");

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
      const noteRef = doc(db, "notes", id);
      await deleteDoc(noteRef);
      handleSuccess("Not başarıyla silindi!");
    } catch (error) {
      console.log("Error:", error);
      handleError("Not silinirken bir hata oluştu!");
    }
  };

  const handleEditNote = async (id: string) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        title: updatedTitle,
        category: updatedCategory,
        description: updatedDescription,
      });
      handleSuccess("Not başarıyla düzenlendi!");
    } catch (error) {
      console.log("Error:", error);
      handleError("Not düzenlenirken bir hata oluştu!");
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

  const categoryLength = (category: string) => {
    return filteredNotes?.filter((note) => note?.category === category).length;
  };

  const categories = [
    {
      id: 1,
      color: "bg-pink-500",
      darkColor: "bg-pink-700",
      category: "Tüm Notlar",
      length: filteredNotes?.length,
      lengthColor: "bg-pink-500",
      darkLengthColor: "bg-pink-600",
    },
    {
      id: 2,
      color: "bg-orange-600",
      darkColor: "bg-orange-700",
      category: "Dilek Listesi",
      length: categoryLength("Dilek Listesi"),
      lengthColor: "bg-orange-600",
      darkLengthColor: "bg-orange-700",
    },
    {
      id: 3,
      color: "bg-blue-600",
      darkColor: "bg-blue-700",
      category: "Ödev",
      length: categoryLength("Ödev"),
      lengthColor: "bg-blue-600",
      darkLengthColor: "bg-blue-700",
    },
    {
      id: 4,
      color: "bg-teal-500",
      category: "Projeler",
      length: categoryLength("Projeler"),
      lengthColor: "bg-teal-500",
    },
    {
      id: 5,
      color: "bg-rose-500",
      darkColor: "bg-rose-700",
      category: "İş",
      length: categoryLength("İş"),
      lengthColor: "bg-rose-500",
      darkLengthColor: "bg-rose-600",
    },
    {
      id: 6,
      color: "bg-yellow-500",
      darkColor: "bg-yellow-700",
      category: "Çalışma",
      length: categoryLength("Çalışma"),
      lengthColor: "bg-yellow-500",
      darkLengthColor: "bg-yellow-700",
    },
  ];

  const valueToShare = {
    notes,
    setNotes,
    filteredNotes,
    handleSubmit,
    handleDeleteNote,
    title,
    setTitle,
    category,
    setCategory,
    description,
    setDescription,
    edit,
    setEdit,
    handleEditNote,
    updatedTitle,
    setUpdatedTitle,
    updatedCategory,
    setUpdatedCategory,
    updatedDescription,
    setUpdatedDescription,
    filteredCategories,
    categories,
  };

  return (
    <NoteContext.Provider value={valueToShare}>{children}</NoteContext.Provider>
  );
};

export { NoteProvider };
export default NoteContext;

export const useNoteContext = () => useContext(NoteContext);
