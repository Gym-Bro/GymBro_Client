import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from "../config";

interface props{
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider= ({ children }:props) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return (   
  
      <AuthContext.Provider value={{ user }}>
        {children}
      </AuthContext.Provider>
      
    );
  };
  