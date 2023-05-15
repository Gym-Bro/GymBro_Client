import { useAuthContext } from '@/app/firebase/auth/AuthContext';
import React, { useEffect, useState } from 'react';
import { UserDbContext } from '../Context/UserDbContext';


interface props{
    children: JSX.Element | JSX.Element[]
}

export const UserDbProvider= ({ children }:props) => {
    const [userDb, setUserDB] = useState({});
    const {user} = useAuthContext()

    useEffect(() => {
     user && getUserDb()
    }, [user]);    
   
    
    const getUserDb = async()=>{
        const tokenID = await user?.getIdToken();
        const userEmail =user && user?.email;
        const response = await fetch(
        `http://localhost:5001/gymbro-27bb2/us-central1/api/user/${userEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenID,
          },             
        }
      ).then(res => res.json());
      setUserDB(response);    
  }
    
  
    return (   
  
      <UserDbContext.Provider value={{ userDb }}>
        {children}
      </UserDbContext.Provider>
      
    );
  };
  