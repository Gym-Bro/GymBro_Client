"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { confirmResetPassword } from "../firebase/auth/signIn";
import { useRouter } from 'next/router'

export default function Page() {
  const [input, setInput] = React.useState({
    password: "",
    passwordConfirm: "",
  });
  const [confirm, setConfirm] = React.useState(false);
//   const navigate = useRouter();
  const params = useSearchParams();
  const obbCode = params.get("oobCode");
  console.log(obbCode)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.password !== input.passwordConfirm){
      alert("Por favor coloque la misma contraseña");
      setInput({
        password: "",
        passwordConfirm: "",
      })
    return}
      else
    setConfirm(true);
    obbCode && confirmResetPassword(obbCode, input.password);
    alert("La contraseña se a cambiado correctamente");
    // navigate.push('/');
  };
  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      {confirm? <h3> Tu se a cambiado correctamente</h3> :
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          required
          value={input.password}
          type="password"
          name="password"
          id="password"
          placeholder="  Nueva Contraseña"
        />
        <input
          onChange={handleInputChange}
          required
          value={input.passwordConfirm}
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="  Repetir Contraseña"
        />
        <button type="submit" className="btn"></button>
      </form>}
    </>
  );
}
