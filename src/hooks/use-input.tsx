"use client";

import { useState } from "react";

import { IInitialState } from "@/types";

const useInput = (params: IInitialState) => {
  const [inputs, setInputs] = useState<IInitialState>(params);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return { inputs, setInputs, handleChange };
};

export default useInput;
