import React from "react";
import css from "./CardProducts.module.css";
import Image, { StaticImageData } from "next/image";

export default function CardProducts(props: { props: StaticImageData[] }) {
  return (
    <>
      {props.props.map((e,i) => (
          <div key={i} className={css.container}>
        
            <div className={css.box}><Image src={e} alt={`${e}`} /></div>
          
          <div className={css.box2}>
            <h1>{`${e}`}</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium error veniam explicabo tempore dolor ducimus quia hic
              laborum! Quibusdam ullam ducimus facilis voluptatem deleniti alias
              architecto quo vero odit tenetur.
            </h3>
            <h2>$4.500</h2>
          <button className="btn">Comprar</button>
          </div>
        </div>
    
      ))}
      </>
  );
}
