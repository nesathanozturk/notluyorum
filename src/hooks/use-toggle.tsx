"use client";

import { useState, useRef } from "react";

const useToggle = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, setIsOpen, handleOpen, handleClose };
};

export default useToggle;
