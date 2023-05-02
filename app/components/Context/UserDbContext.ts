import React, { createContext, useContext } from "react";

type objectDb = {
  first_name: string;
  last_name: string;
  email: string;
  photo_url: string | null;
}

interface AuthContextValue {
  userDb: objectDb | null;
}

export const UserDbContext = createContext<AuthContextValue>({ userDb: null });

export const useUserDbContext = () => useContext(UserDbContext);
