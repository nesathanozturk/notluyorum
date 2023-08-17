"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/context/AuthContext";

import { IAuth } from "@/types";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { currentUser } = useAuthContext() as IAuth;

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [router, currentUser]);

  let content = currentUser ? children : null;

  return content;
};

export default ProtectedRoute;
