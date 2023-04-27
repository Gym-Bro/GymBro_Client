"use client";
import { passwordReset } from "@/app/firebase/auth/signIn";
import React from "react";

const Page = () => {
  const [email, setEmail] = React.useState("");
  const [confirmEmail, setConfirmEmail] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await passwordReset(email);
      setConfirmEmail(true);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        alert("Usuario no econtrado; Intente nuevamente!!");
        setEmail("");
      }
    }
  };
  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };
  return (
    <>
      {confirmEmail ? (
        <h3> El correo electrónico ha sido enviado; Revisa tu correo!!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn">            
            Restablezca su contraseña
          </button>
        </form>
      )}
    </>
  );
};

export default Page;
