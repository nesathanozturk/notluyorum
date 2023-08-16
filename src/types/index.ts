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
  value: IInitialState;
  setValue: React.Dispatch<React.SetStateAction<IInitialState>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
}
