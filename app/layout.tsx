"use client";
import "../styles/globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./firebase/auth/AuthContextProvider";
import { UserDbProvider } from "./components/Providers/UserDbProvider";
import React from 'react'

export default function RootLayout({ children }: any) {
  const [toogle, setToogle] = React.useState(false);
  const closeMenu = ()=> {
    if(toogle)setToogle(!toogle)}
  return (
    
    <html lang="en">
      <head>
        <title> GYM-BRO</title>
      </head>
      <body onClick={closeMenu}>
        <AuthContextProvider>
          <NavBar toogle={toogle} setToogle={setToogle}/>
          <UserDbProvider>{children}</UserDbProvider>
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
    
  );
}
