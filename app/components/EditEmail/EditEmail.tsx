"use client";
import React, { useState } from "react";
import Logo from "../../../public/favicon.ico";
import Image from "next/image";
import { useAuthContext } from "../../firebase/auth/AuthContext";
import css from "./EditEmail.module.css";
import { useRouter } from "next/navigation";
import { Modal } from "../Modal";

export const EditEmail = ({setOpened}: any) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,16}$/;
  const router = useRouter();
  const { user } = useAuthContext();
  const [email, setEmail] = useState({
    email: "",
    new_email: "",
    password: "",
    new_password: "",
    new_password_confirm: "",
  });
  console.log(email);
  const [error, setError] = useState({
    password: "",
    new_password: "",
    new_password_confirm: "",
    new_email: "",
  });
  console.log("error", error);
  console.log(email.new_password !== email.new_password_confirm);

  React.useEffect(() => {
    if (email.password && !passwordRegex.test(email.password))
      setError({
        ...error,
        password:
          "Una mayuscula, un numero, un caracter especial",
      });
    else setError({ ...error, password: "" });
  }, [email.password]);
  React.useEffect(() => {
    if (email.new_password && !passwordRegex.test(email.new_password))
      setError({
        ...error,
        new_password:
          "Una mayuscula, un numero, un caracter especial",
      });
    else setError({ ...error, new_password: "" });
  }, [email.new_password]);
  React.useEffect(() => {
    if (
      email.new_password_confirm &&
      email.new_password_confirm !== email.new_password
    )
      setError({
        ...error,
        new_password_confirm: "Debería ser igual a la contraseña nueva",
      });
    else setError({ ...error, new_password_confirm: "" });
  }, [email.new_password_confirm]);
  React.useEffect(() => {
    if (email.new_email && !emailRegex.test(email.new_email))
      setError({ ...error, new_email: "Debería ser un correo electrónico" });
    else setError({ ...error, new_email: "" });
  }, [email.new_email]);

  const changeEmail = async (tokenID: string, user: object) => {
    const response = await fetch(
      "http://localhost:5001/gymbro-27bb2/us-central1/api/auth/resetEmail",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenID,
        },
        body: JSON.stringify(user),
      }
    );
    return response.json();
  };
  const handlerInputChanged = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, [name]: value });
  };
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tokenId = await user?.getIdToken();
    const Email = await user?.email;
    if (tokenId !== undefined && Email !== null && Email !== undefined) {
      setEmail({ ...email, email: Email });
      changeEmail(tokenId, email);
    }
    router.refresh();
  };

  return (
    <Modal>
      <div className={css.container}>
        <Image src={Logo} alt="GymBro" />
        <div onClick={(e) => e.stopPropagation()} className={css.box}>
          <h3>Editar correo electrónico</h3>
          <form onSubmit={handlerSubmit}>
            <div className={css.box_input}>
              <label htmlFor="password">Contraseña Actual</label>
              <input
                type="password"
                name="password"
                id="password"
                minLength={8}
                maxLength={24}
                value={email.password}
                required
                placeholder=" Contraseña..."
                onChange={handlerInputChanged}
              />
              {error.password !== "" ? <p>{error.password}</p> : null}
            </div>
            <div className={css.box_input}>
              <label htmlFor="new_password">Nueva Contraseña</label>
              <input
                type="password"
                name="new_password"
                id="new_password"
                minLength={8}
                maxLength={24}
                value={email.new_password}
                required
                placeholder=" Nueva contraseña..."
                onChange={handlerInputChanged}
              />
              {error.new_password !== "" ? <p>{error.new_password}</p> : null}
            </div>
            <div className={css.box_input}>
              <label htmlFor="new_password_confirm">Confirmar Contraseña</label>
              <input
                type="password"
                name="new_password_confirm"
                id="new_password_confirm"
                value={email.new_password_confirm}
                required
                placeholder=" Repetir contraseña..."
                onChange={handlerInputChanged}
              />
              {error.new_password_confirm !== "" ? (
                <p>{error.new_password_confirm}</p>
              ) : null}
            </div>
            <div className={css.box_input}>
              <label htmlFor="new_email">Nuevo correo electrónico</label>
              <input
                type="email"
                name="new_email"
                id="new_email"
                value={email.new_email}
                required
                placeholder=" Nuevo correo..."
                onChange={handlerInputChanged}
              />
              {error.new_email !== "" ? <p>{error.new_email}</p> : null}
            </div>
            <h3>¿Estás de acuerdo con estos cambios?</h3>
            <button className="btn alert" type="submit">
              Aplicar cambios
            </button>
          </form>
          <h3>¿Cambiaste de opinión?</h3>
          <button className="btn" onClick={() => setOpened(false)}>
            Regresa a tu Perfil
            </button>
        </div>
      </div>
    </Modal>
  );
};
