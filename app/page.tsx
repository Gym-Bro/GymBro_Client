"use client";
import React from "react";
import banner1 from "../styles/assets/banner1.jpg";
import banner2 from "../styles/assets/banner2.jpg";
import banner3 from "../styles/assets/banner3.jpg";
import banner4 from "../styles/assets/banner4.jpg";
import css from './landingPage.module.css'
import Swipers from "./components/Swipers";
import Swip from "./components/swip";
import Activities from "./components/Activities";

function page() {
  const fotos = [banner1, banner2, banner3, banner4];

  return (
    <div className={css.container}>
      <Swipers props={fotos} />
      <Swip />
      <Activities />
    </div>
  );
}

export default page;
