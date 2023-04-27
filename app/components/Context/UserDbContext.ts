import React, { createContext, useContext } from "react";

interface AuthContextValue {
  userDb: Object | null;
}

export const UserDbContext = createContext<AuthContextValue>({ userDb: null });

export const useUserDbContext = () => useContext(UserDbContext);
