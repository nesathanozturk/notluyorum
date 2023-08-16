"use client";

import { IInitialState } from "@/types";
import { useState } from "react";

const useInput = (params: IInitialState) => {
  const [value, setValue] = useState<IInitialState>(params);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return { value, setValue, handleChange };
};

export default useInput;
