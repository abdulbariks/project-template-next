"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCredentials, clearCredentials } from "@/features/auth/authSlice";
import { useEffect } from "react";
import type { RootState } from "@/redux/store";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated, isLoading } = useAppSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        dispatch(setCredentials(parsed));
      } catch {
        localStorage.removeItem("auth");
      }
    }
  }, [dispatch]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    login: (credentials: { email: string; password: string }) =>
      dispatch({ type: "auth/login", payload: credentials }),
    logout: () => {
      localStorage.removeItem("auth");
      dispatch(clearCredentials());
    },
  };
}
