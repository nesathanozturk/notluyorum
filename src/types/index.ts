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
