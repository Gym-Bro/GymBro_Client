import React from "react";
import css from "./CardProducts.module.css";
import Image from "next/image";

export default function CardProducts({ props }: any) {  
  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <Image className={css.box_img} src={props} alt={`${props}`} />
        </div>

        <div className={css.box2}>
          <h1>{`${props}`}</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            error veniam explicabo tempore dolor ducimus quia hic laborum!
            Quibusdam ullam ducimus facilis voluptatem deleniti alias architecto
            quo vero odit tenetur.
          </h3>
          <h2>$4.500</h2>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </>
  );
}
