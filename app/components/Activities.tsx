import React from "react";
import mancuernas1 from "../../styles/assets/mancuernas 1.png";
import mancuernas2 from "../../styles/assets/mancuernas 2.png";
import mancuernas3 from "../../styles/assets/mancuernas 3.png";
import mancuernas4 from "../../styles/assets/mancuernas 4.png";
import mancuernas5 from "../../styles/assets/mancuernas 5.png";
import mancuernas6 from "../../styles/assets/mancuernas 6.png";
import Image from "next/image";
import css from './Activities.module.css'

export default function Activities() {
  return (
    <div className={css.Container}>
      <h1> Actividades</h1>
      <div className={css.Box}>
        <div>
        <Image src={mancuernas1} alt="Mancuernas" />
        <h3>Mancuernas</h3>
        </div>
      <div >
        <Image src={mancuernas2} alt="Calistenia" />
        <h3>Calistenia</h3>
      </div>
      <div >
        <Image src={mancuernas3} alt="Aeróbicos" />
        <h3>Aeróbicos</h3>
      </div>
      <div >
        <Image src={mancuernas4} alt="Acuáticos" />
        <h3>Acuáticos</h3>
      </div>
      <div >
        <Image src={mancuernas5} alt="Fitnes" />
        <h3>Fitnes</h3>
      </div>
      <div >
        <Image src={mancuernas6} alt="Yoga" />
        <h3>Yoga</h3>
      </div>
      </div>
    </div>
  );
}
