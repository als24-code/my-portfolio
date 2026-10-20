"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const AuthDialogContext = createContext(null);

export const AuthDialogProvider = ({ children }) => {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState < boolean > false;
  const [isFailedDialogOpen, setIsFailedDialogOpen] =
    useState < boolean > false;
  const [isUserRegistered, setIsUserRegistered] = useState < boolean > false;

  return (
    <AuthDialogContext.Provider
      value={{
        isSuccessDialogOpen,
        isFailedDialogOpen,
        setIsSuccessDialogOpen,
        setIsFailedDialogOpen,
        isUserRegistered,
        setIsUserRegistered,
      }}
    >
      {children}
    </AuthDialogContext.Provider>
  );
};

export default AuthDialogContext;
