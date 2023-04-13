"use client";
import React from "react";
import Map from "../components/Mapa";
import css from "./sedes.module.css"

function Page() {
  const [first, setfirst] = React.useState("Florida, C1005, Microcentro, CABA");
  const [second, setSecond] = React.useState(
    "Monteagudo 295, C1437EVE, Parque Patricios, CABA"
  );
  return (
    <div className={css.container}>
      <h2>Podés encontrarnos en las siguientes sedes:</h2>
      <div className={css.map}>
        <h3>Florida, C1005, Microcentro, CABA</h3>
        <Map address={first} />
      </div>
      <div className={css.map}>
        <h3>Monteagudo 295, C1437EVE, Parque Patricios, CABA</h3>
        <Map address={second} />
      </div>
    </div>
  );
}

export default Page;
