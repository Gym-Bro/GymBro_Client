"use client";
import React from "react";
import {signIn} from "../firebase/auth/signIn";
import Logo from "../../public/favicon.ico";
import Image from "next/image";
import css from "./login.module.css"
import Link from "next/link";
import { Modal } from "../components/Modal";
import {AiFillGoogleCircle, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter()
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const handleForm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(input.email, input.password);
    console.log(result);

    if (error) {
      return console.log(error);
    }

    setInput({
      email: "",
      password: "",
    });
    router.push('/')
  };

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };

  const handlerClose = (e:React.MouseEvent<HTMLDivElement>)=>{   
    router.push('/')

  }


  return (
    <Modal>    
        <div onClick={handlerClose} className={css.primaryContainer}>
        <Image alt="Gym-Bro" src={Logo} className={css.img}/>
      <div onClick={(e)=> e.stopPropagation()}  className={css.container}>
        <h3>Iniciar Sesión</h3>
        <div className={css.socials}>
        <h3>Podés iniciar sesión usando estas tres redes:</h3>
        <div className={css.icons}>
        <AiFillGoogleCircle className={css.icon}/>
        <BsFacebook className={css.icon}/>
        <AiFillTwitterCircle className={css.icon}/>
        </div>
        <h3>O</h3>
        <h3>Iniciar sesión con tu cuenta de GymBro:</h3>
        </div>
        
        <form className={css.form}>
          <label htmlFor="email">
            <p>Correo electronico:</p>
            <input
              onChange={handleInputChange}
              required
              value={input.email}
              type="email"
              name="email"
              id="email"
              placeholder=" Correo"
            />
          </label>
          <label htmlFor="password">
            <p>Contraseña:</p>
            <input
              onChange={handleInputChange}
              required
              value={input.password}
              type="password"
              name="password"
              id="password"
              placeholder=" Contraseña"
            />
          </label>
          <button onClick={handleForm} className="btn">Iniciar Sesión</button>
        </form>
        
        <div className={css.create}>
        
          <h3>Olvidaste tu contraseña?</h3>
        <button className="btn" onClick={()=> router.push('/forgotPassword')}>Recuperar Contraseña</button>
          
        
          <h3>No tenés cuenta?</h3>
          <Link href='./createUser'>
          <button className="btn">Registrate</button>
          </Link>
          </div>
      </div>
    </div>
    
    </Modal>
  );
}

export default Page;
