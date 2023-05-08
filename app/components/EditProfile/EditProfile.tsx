"use client";
import React, { useState } from "react";
import Logo from "../../../public/favicon.ico";
import Image from "next/image";
import css from "./EditProfile.module.css";

const EditProfile = ({setOpen}:any) => {   
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    birdth_date: "",
    image: "",
  });

  const HandlerChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: { value } });
  };

  const HandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={css.container}>
      <Image alt="Gym-Bro" src={Logo} className={css.img} />
      <div className={css.box} onClick={(e)=>e.stopPropagation()} >
        <form onSubmit={HandlerSubmit} className={css.form}>
          <h3>Editar Perfil</h3>

          <div className={css.input}>
            <label htmlFor="first_name">Nuevo nombre:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder=" Nuevo nombre..."
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
              onChange={HandlerChange}
            />
          </div>
          <div className={css.input}>
            <label htmlFor="birdth_date">Nueva fecha de nacimiento:</label>
            <input
              type="date"
              id="birdth_date"
              name="birdth_date"
              placeholder=" **/**/**"
              onChange={HandlerChange}
            />
          </div>
          <div className={css.input}>
            <label htmlFor="image">Nueva foto de perfil:</label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder=" Nueva imagen..."
              onChange={HandlerChange}
            />
          </div>
          <h3>Deseas aplicar estos cambios a tu perfil?</h3>
          <button type="submit" className="btn alert">
            Aplicar cambios
          </button>
        </form>
        <h3>Cambiaste de opinión?</h3>
        <button className="btn" onClick={()=> setOpen(false)} >Regresa a tu Perfil</button>
      </div>
    </div>
  );
};

export default EditProfile;
