"use client";
import React from "react";
import Map from "../components/Mapa";
import css from "./sedes.module.css"

function Page() {
  const [first, setfirst] = React.useState({ lat: -34.5989486, lng: -58.3781122 });
  const [second, setSecond] = React.useState(
    { lat: -34.5967481, lng: -58.386465}
  );//-,-
  return (
    <div className={css.container}>
      <h2>Podés encontrarnos en las siguientes sedes:</h2>
      <div className={css.map}>
        <h3>Florida, C1005, Microcentro, CABA</h3>
        <Map position={first} />
      </div>
      <div className={css.map}>
        <h3>Monteagudo 295, C1437EVE, Parque Patricios, CABA</h3>
        <Map position={second} />
      </div>
    </div>
  );
}

export default Page;
