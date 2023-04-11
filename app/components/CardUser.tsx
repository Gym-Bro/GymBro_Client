import React from "react";
import { FaUserCircle } from "react-icons/fa";
import css from './CardUser.module.css'

function CardUser({ user, stars, time }) {   
  
  return (
    <>
    <div className={css.cardContainer}>
      <FaUserCircle className={css.icon}/>
      <h2>user {user}</h2>
      <div >
   
        <div className={css.starsContainer}> { stars.map((e,i)=>
      (<div key={i} className={css.star}></div>))}
        </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati
        perferendis ducimus consectetur dolorem deleniti. Placeat fugit
        cupiditate perferendis reprehenderit doloremque aut?       </p>
      <p>Tiempo de uso de la aplicación:{time} dias </p>
    </div>
    </div>
    </>
  );
}

export default CardUser;
