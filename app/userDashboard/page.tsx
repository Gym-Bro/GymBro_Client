"use client";
import React from "react";
import Image from "next/image";
import css from "./userDasboard.module.css";
import { useUserDbContext } from "../components/Context/UserDbContext";
import { Modal } from "../components/Modal";
import EditProfile from "../components/EditProfile/EditProfile";

const Page = () => {
  const { userDb } = useUserDbContext();
console.log(userDb)
  const [open, setOpen] = React.useState(false);
  const edit = () => {
    setOpen(true);
  };

  return (
    <>
    { open ? <Modal><EditProfile setOpen={setOpen}/></Modal>:<div className={css.container}>
      <h2>Bienvenido, {userDb?.first_name}!</h2>
      <div className={css.dashboard}>
        <h2>Estos son tus datos</h2>
        <div className={css.data}>
          <h3>Nombre: {userDb?.first_name}</h3>
          <h3> Apellido: {userDb?.last_name}</h3>
        </div>
        <div className={css.data}>
          <h3>Correo: {userDb?.email}</h3>
          <h3> Fecha de nac.: {userDb?.birth_date}</h3>
        </div>
        <div>
          <h3>Edad:{}</h3>
        </div>
        <div className={css.img}>
          {userDb?.photoURL
 ? <img src={userDb.photoURL
 } alt={userDb?.last_name } 
 height={100}
 width={100}/> : ""}
        </div>
        <h2>Foto de perfil</h2>
        <div className={css.data}>
          <div className={css.buttons}>
            <h4>Quieres darle una apariencia única a tu perfil?</h4>
            <button className="btn" onClick={edit}>
              Edita tu perfil
            </button>
          </div>
          <div className={css.buttons}>
            <h4>No te sientes cómodo con tu suscripción?</h4>
            <button className="btn alert">Cancelar suscripción</button>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Page;
