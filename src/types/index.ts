import { ReactElement } from "react";
import { User } from "firebase/auth";

export interface IToggle {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
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

export interface INote {
  notes: INoteFeatures[];
  setNotes: React.Dispatch<React.SetStateAction<INoteFeatures[]>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteNote: (id: string) => Promise<void>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  filteredCategories: (category: string) => void;
}

export interface IOptionProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
