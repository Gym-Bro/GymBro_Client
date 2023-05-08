"use client";
import React from "react";
import banner1 from "../styles/assets/banner1.jpg";
import banner2 from "../styles/assets/banner2.jpg";
import banner3 from "../styles/assets/banner3.jpg";
import banner4 from "../styles/assets/banner4.jpg";
import banner5 from "../styles/assets/almendras.png";
import banner6 from "../styles/assets/creatina.png";
import banner7 from "../styles/assets/protein.png";
import css from './landingPage.module.css'
import Swipers from "./components/Swipers";
import Swip from "./components/swip";
import Activities from "./components/Activities";
import { useAuthContext } from "./firebase/auth/AuthContext";

function Page() {
  const fotos = [banner1, banner2, banner3, banner4];
  const foto = [banner5, banner6, banner7];
  const {user} = useAuthContext();
  console.log(user)
  return (
    <div className={css.container}>
      <Swipers props={fotos} />
      <Swip props={foto} />
      <Activities />
    </div>
  );
}

export default Page;
