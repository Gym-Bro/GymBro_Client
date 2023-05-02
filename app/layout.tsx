"use client";
import "../styles/globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./firebase/auth/AuthContextProvider";
import { UserDbProvider } from "./components/Providers/UserDbProvider";

export default function RootLayout({ children }: any) {
  return (
    
    <html lang="en">
      <head>
        <title> GYM-BRO</title>
      </head>
      <body>
        <AuthContextProvider>
          <NavBar />
          <UserDbProvider>{children}</UserDbProvider>
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
    
  );
}
