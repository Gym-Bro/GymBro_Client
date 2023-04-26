import React from "react";
import Image from "next/image";
import css from "./userDasboard.module.css";

const Page = () => {
  const user = {
    name: "manolito",
    email: "manolito@gmail.com",
    last_name: "gascon",
    age: 25,
    nacimiento: "12/10/84",
  };

  return (
    <div className={css.container}>
      <h2>Bienvenido, {user.name}!</h2>
      <div className={css.dashboard}>
        <h2>Estos son tus datos</h2>
        <div className={css.data}>
          <h3>Nombre: {user.name}</h3>
          <h3> Apellido: {user.last_name}</h3>
        </div>
        <div className={css.data}>
          <h3>Correo: {user.email}</h3>
          <h3> Fecha de nac.: {user.nacimiento}</h3>
        </div>
      
      <div>
        <h3>Edad:{user.age}</h3>
      </div>
      <div className={css.img}>
        <Image src="" alt="" />
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
