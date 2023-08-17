import { ReactElement } from "react";
import { User } from "firebase/auth";

export interface IToggle {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface IInitialState {
  title: string;
  category: string;
  description: string;
}

export interface IInput {
  inputs: IInitialState;
  setInputs: React.Dispatch<React.SetStateAction<IInitialState>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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

export interface IAuth {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

export interface IAuthButtonProps {
  handleClick: () => void;
  authStatus: string;
  Icon: any;
}
