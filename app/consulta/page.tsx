'use client'
import React from "react";
import css from './consulta.module.css'
const Page = () => {
  const [comment, setComment] = React.useState({
title:'',
email:'',
name:'',
body:''
  })
  console.log(comment)
  const sendMessage = async()=>{
    const response = await fetch(
      "http://localhost:5001/gymbro-27bb2/us-central1/api/contactus",
      {
        method: "POST",        
        body: JSON.stringify(comment),
      }
    );
  }
  const handlerSubmit =(e:React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault();
    sendMessage();

  }
const handlerChange =({target:{value,name}}:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement> )=>{
  setComment({
    ...comment,
[name]: {value}
  })
}

  return (
    <div className={css.container}>
    <form className={css.form} onSubmit={handlerSubmit}>
      <h2>Tienes alguna consulta?</h2>
      <h2>Contacta con nosotros y te responderemos a la brevedad</h2>
      <div className={css.inputs} >
      <div className={css.input}>        
        <label htmlFor="title">Título o asunto</label>
        <input onChange={handlerChange} type="text" id="title" placeholder=" Titulo" required/>
      </div>
      <div className={css.input}>
        <label htmlFor="email">Correo electrónico</label>
        <input onChange={handlerChange} type="email" id="email" name="email" placeholder=" Tu correo" required/>
      </div>
      <div className={css.input}>
        <label htmlFor="name">Nombre</label>
        <input onChange={handlerChange} type="text" id="name" name="name" placeholder=" Tu nombre" required/>
      </div>
      <div className={css.input}>
        <label htmlFor="body">Cuál es tu consulta?</label>
        <textarea
          onChange={handlerChange}
          name="body"
          id="body"
          rows={4}
          maxLength={300}
          placeholder=" Escribe aquí tu consulta"
          required
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
