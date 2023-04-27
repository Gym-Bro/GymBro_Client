'use client'
import React from "react";
import Image from "next/image";
import css from "./userDasboard.module.css";
import { useUserDbContext } from "../components/Context/UserDbContext";

const Page = () => {
  const {userDb} = useUserDbContext()
console.log(userDb)
  return (
    <div className={css.container}>
      <h2>Bienvenido, {userDb?.first_name}!</h2>
      <div className={css.dashboard}>
        <h2>Estos son tus datos</h2>
        <div className={css.data}>
          <h3>Nombre: {userDb?.first_name}</h3>
          <h3> Apellido: {userDb?.last_name}</h3>
        </div>
        <div className={css.data}>
          <h3>Correo: {userDb?.email}</h3>
          <h3> Fecha de nac.: {}</h3>
        </div>
      
      <div>
        <h3>Edad:{}</h3>
      </div>
      <div className={css.img}>
        <Image src={userDb?.photo_url
||''} alt={userDb?.last_name} />
      </div>
        <h2>Foto de perfil</h2>
      
      <div className={css.data}>
        <div className={css.buttons}>
          <h4>Quieres darle una apariencia única a tu perfil?</h4>
          <button className="btn">Edita tu perfil</button>
        </div>
        <div className={css.buttons}>
          <h4>No te sientes cómodo con tu suscripción?</h4>
          <button className="btn">Cancelar suscripción</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
