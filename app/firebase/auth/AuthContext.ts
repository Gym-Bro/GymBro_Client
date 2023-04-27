import React, { createContext, useContext } from "react";
import { User } from "firebase/auth";

interface AuthContextValue {
  user: User | null;
}

export const AuthContext = createContext<AuthContextValue>({ user: null });

export const useAuthContext = () => useContext(AuthContext);
