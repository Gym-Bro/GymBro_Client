import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "../firebase/auth/signIn";
import css from "./UserMenu.module.css";

interface props {
  user: boolean;
  name: string | null;
  toogle: boolean;
  setToogle:Function 
}

const UserMenu = ({ user, name, toogle, setToogle }: props) => {
  const route = useRouter();
  return (
    <div className={css.container}>
      {user && user ? (
          <div className={css.container}>
            <div className={css.pico}></div>
          <h3>Bienvenido, {name}!</h3>
          <h3>Qué deseas hacer?</h3>
          <button className="btn" onClick={() => {route.push("/userDashboard"); setToogle(!toogle)}}>
            Ver mi perfil
          </button>
          <button className="btn" onClick={() => {route.push("/mis_rutinas"); setToogle(!toogle)}}>
            Ver mis rutinas
          </button>
          <button className="btn" onClick={() => {signOut(); setToogle(!toogle)}}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className={css.container}>
          <h3>Estas como invitado!</h3>
          <h3>Qué deseas hacer?</h3>
          <button className="btn" onClick={() => {route.push("/login");setToogle(!toogle)}}>
            Iniciar sesión
          </button>
          <button className="btn" onClick={() => {route.push("/createUser");setToogle(!toogle)}}>
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
