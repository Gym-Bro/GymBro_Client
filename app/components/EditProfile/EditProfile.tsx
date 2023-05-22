"use client";
import React, { useState } from "react";
import Logo from "../../../public/favicon.ico";
import Image from "next/image";
import { useAuthContext } from "../../firebase/auth/AuthContext";
import css from "./EditProfile.module.css";
import { useRouter } from "next/navigation";

const EditProfile = ({ setOpen }: any) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    photoURL: "",
    birth_date: "",
  });
  console.log(input);
  const editUserProfile = async (obj: object) => {
    const userEmail = user?.email;
    const tokenID = await user?.getIdToken();
    const res = await fetch(
      `http://localhost:5001/gymbro-27bb2/us-central1/api/user/${userEmail}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenID,
        },
        body: JSON.stringify(obj),
      }
    );
  };
  const HandlerChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };

  const HandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editUserProfile(input);
    setInput({
      first_name: "",
      last_name: "",
      birth_date: "",
      photoURL: "",
    });
    setOpen(false);
    router.refresh();
  };

  return (
    <div className={css.container}>
      <Image alt="Gym-Bro" src={Logo} className={css.img} />
      <div className={css.box} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={HandlerSubmit} className={css.form}>
          <h3>Editar Perfil</h3>

          <div className={css.input}>
            <label htmlFor="first_name">Nuevo nombre:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder=" Nuevo nombre..."
              value={input.first_name}
              onChange={HandlerChange}
            />
          </div>
          <div className={css.input}>
            <label htmlFor="last_name">Nuevo apellido:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder=" Nuevo apellido..."
              value={input.last_name}
              onChange={HandlerChange}
            />
          </div>
          <div className={css.input}>
            <label htmlFor="birth_date">Nueva fecha de nacimiento:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              placeholder=" **/**/**"
              value={input.birth_date}
              onChange={HandlerChange}
            />
          </div>
          <div className={css.input}>
            <label htmlFor="photoURL">Nueva foto de perfil:</label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              placeholder=" Nueva imagen..."
              value={input.photoURL}
              onChange={HandlerChange}
            />
          </div>
          <h3>Deseas aplicar estos cambios a tu perfil?</h3>
          <button type="submit" className="btn alert">
            Aplicar cambios
          </button>
        </form>
        <h3>Cambiaste de opinión?</h3>
        <button className="btn" onClick={() => setOpen(false)}>
          Regresa a tu Perfil
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
