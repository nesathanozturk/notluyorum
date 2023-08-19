import { ReactElement } from "react";

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export interface ITheme {
  theme: boolean;
  handleThemeChange: () => void;
}

export interface IWindowSize {
  width: number;
  height: number;
}

export interface IUser {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface IAuth {
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

export interface INoteFeatures {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface ICategory {
  id: number;
  color: string;
  category: string;
  length: number;
  lengthColor: string;
  darkColor?: string | undefined;
  darkLengthColor?: string | undefined;
}

export interface IInputs {
  title: string;
  category: string;
  description: string;
  updatedTitle: string;
  updatedCategory: string;
  updatedDescription: string;
}
export interface INote {
  notes: INoteFeatures[];
  setNotes: React.Dispatch<React.SetStateAction<INoteFeatures[]>>;
  filteredNotes: INoteFeatures[];
  isAddNoteModalOpen: boolean;
  setIsAddNoteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputs: IInputs;
  setInputs: (value: React.SetStateAction<IInputs>) => void;
  selectedNote: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteNote: (id: string) => Promise<void>;
  handleEditNote: (selectedNote: string) => Promise<void>;
  handleSelectedNote: (id: string) => void;
  filteredCategories: (category: string) => void;
  categories: ICategory[];
}

export interface IInputProps {
  title: string;
  inputValue: string;
}
