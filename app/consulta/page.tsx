import React from "react";
import css from './consulta.module.css'
const Page = () => {
  return (
    <div className={css.container}>
    <form className={css.form}>
      <h2>Tienes alguna consulta?</h2>
      <h2>Contacta con nosotros y te responderemos a la brevedad</h2>
      <div className={css.inputs} >
      <div className={css.input}>        
        <label htmlFor="title">Título o asunto</label>
        <input type="text" id="title" placeholder=" Titulo" />
      </div>
      <div className={css.input}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" placeholder=" Tu correo" />
      </div>
      <div className={css.input}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder=" Tu nombre" />{" "}
      </div>
      <div className={css.input}>
        <label htmlFor="consult">Cuál es tu consulta?</label>
        <textarea
          name="consult"
          id="consult"
          rows={4}
          placeholder=" Escribe aquí tu consulta"
        />
      </div>
      </div>
      <button type="submit" className="btn">
        Enviar consulta
      </button>
    </form>
    </div>
  );
};

export default Page;
