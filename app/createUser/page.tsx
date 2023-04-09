"use client";
import React from "react";
import signUp from "../firebase/auth/signup";
import Logo from "../../public/favicon.ico";
import Image from "next/image";
import { Modal } from "../components/Modal";
import css from './createUser.module.css'

function Page() {
  const [tokenID, setTokenID] = React.useState("");
  const [input, setInput] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const createUser = async () => {
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        tokenID,
      },
      body: JSON.stringify(input),
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { result, error } = await signUp(input.email, input.password);

    if (error) {
      return console.log(error);
    }
    const idToken = await result?.user.getIdToken();
    if (idToken === "") setTokenID(idToken);
    createUser();
    error ? alert('su usuario no pudo ser creado') : alert('su usuario se creo correctamente')
  };

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };

  return (
    
      <Modal>
    <div className="container">
        <div className={css.primaryContainer}>
        <Image alt="Gym-Bro" src={Logo} className={css.img} />
      <div className={css.container}>
        <h3>Registro</h3>        
        <form onSubmit={handleForm} className={css.form}>
          <label htmlFor="name">
            <p>Nombre:</p>
            <input
              onChange={handleInputChange}
              required
              minLength={3}
              value={input.name}
              type="name"
              name="name"
              id="name"
              placeholder="  Nombre..."
            />
          </label>
          <label htmlFor="lastname">
            <p>Apellido:</p>
            <input
              onChange={handleInputChange}
              required
              minLength={3}
              value={input.lastname}
              type="name"
              name="lastname"
              id="lastname"
              placeholder="  Apellido..."
            />
          </label>
          <label htmlFor="email">
            <p>Correo electronico:</p>
            <input
              onChange={handleInputChange}
              required
              value={input.email}
              type="email"
              name="email"
              id="email"
              placeholder="  Correo..."
            />
          </label>
          <label htmlFor="password">
            <p>Contraseña:</p>
            <input
              onChange={handleInputChange}
              required
              minLength={8}
              maxLength={24}
              value={input.password}
              type="password"
              name="password"
              id="password"
              placeholder="  Contraseña..."
            />
          </label>
          <label htmlFor="repassword">
            <p>Confirmar Contraseña:</p>
            <input
              onChange={handleInputChange}
              required
              
              value={input.repassword}
              type="password"
              name="repassword"
              id="repassword"
              placeholder="  Confirmar contraseña..."
            />
          </label>
          <p>Estas listo para empezar?</p>
          <button type="submit" className="btn">Registrarse</button>
        </form>
      </div>
    </div>
    </div>
    </Modal>
  );
}

export default Page;
