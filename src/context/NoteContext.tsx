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

const INITIAL_STATE = {
  title: "",
  category: "",
  description: "",
  updatedTitle: "",
  updatedCategory: "",
  updatedDescription: "",
};
const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteFeatures[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<INoteFeatures[]>([]);
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState(INITIAL_STATE);
  const [selectedNote, setSelectedNote] = useState<string>("");

  const { currentUser } = useAuthContext() as IAuth;

  const notesRef = collection(db, "notes");

  const showToast = (desc: string, type: "success" | "error") => {
    toast[type](desc, {
      position: "top-right",
    });
  };

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

  const handleCreateNote = async () => {
    if (!inputs.title && !inputs.category && !inputs.description) {
      showToast("Lütfen tüm alanları doldurun!", "error");
      return;
    }

    try {
      const uid = currentUser?.uid;

      await addDoc(collection(db, "notes"), {
        id: uuidv4().toString(),
        uid,
        title: inputs.title,
        category: inputs.category,
        description: inputs.description,
      });
      showToast("Not başarıyla oluşturuldu!", "success");
      setInputs(INITIAL_STATE);
    } catch (error) {
      console.log("Error:", error);
      showToast("Not oluşturulurken bir hata oluştu!", "error");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleCreateNote();
  };

  const handleDeleteNote = async (id: string) => {
    const noteRef = doc(db, "notes", id);

    try {
      await deleteDoc(noteRef);
      showToast("Not başarıyla silindi!", "success");
    } catch (error) {
      console.log("Error:", error);
      showToast("Not silinirken bir hata oluştu!", "error");
    }
  };

  const handleSelectedNote = (id: string) => {
    setSelectedNote(id);
  };

  const handleEditNote = async (selectedNote: string) => {
    if (
      !inputs.updatedTitle &&
      !inputs.updatedCategory &&
      !inputs.updatedDescription
    ) {
      showToast("Lütfen tüm alanları doldurun!", "error");
      return;
    }

    const noteRef = doc(db, "notes", selectedNote);

    try {
      await updateDoc(noteRef, {
        title: inputs.updatedTitle,
        category: inputs.updatedCategory,
        description: inputs.updatedDescription,
      });
      showToast("Not başarıyla düzenlendi!", "success");
      setInputs(INITIAL_STATE);
    } catch (error) {
      console.log("Error:", error);
      showToast("Not düzenlenirken bir hata oluştu!", "error");
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
    isAddNoteModalOpen,
    setIsAddNoteModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    inputs,
    setInputs,
    selectedNote,
    handleEditNote,
    handleSelectedNote,
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
