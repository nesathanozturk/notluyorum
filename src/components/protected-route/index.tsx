"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/context/AuthContext";

import { IAuth } from "@/types";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { currentUser } = useAuthContext() as IAuth;

  useEffect(() => {
    if (!currentUser) router.push("/");
  }, [currentUser]);

  let content = currentUser ? children : "Bu sayfaya erişim yetkiniz yok!";

  return content;
};

export default ProtectedRoute;
