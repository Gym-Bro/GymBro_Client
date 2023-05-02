"use client";
import React from "react";
import Logo from "../../public/favicon.ico";
import Image from "next/image";
import foto1 from "../../styles/assets/gim2 1.png";
import foto2 from "../../styles/assets/gim2 2.png";
import foto3 from "../../styles/assets/gim2 3.png";
import css from "./quienesSomos.module.css";
import CardUser from "../components/CardUser";
import Link  from "next/link";

function Page() { 
  return (
    <div className={css.container}>
      <div className={css.tarjetas}>
        <Image src={Logo} alt="gym-bro" className={css.img} />
        <div>
          <h2>Quienes Somos?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quam iste ullam id, at eveniet mollitia. Vel est doloribus
            voluptatibus debitis, libero cum quaerat doloremque veniam odio?
            Magnam, pariatur nostrum? Ea ab laudantium eaque laboriosam minus
            sint ducimus, enim deleniti saepe delectus, tenetur explicabo nihil
            veniam natus dolore sapiente, magnam sequi libero atque dignissimos
            possimus corporis architecto veritatis. Fugit, aliquid! Sapiente
            consectetur libero culpa sint hic placeat in delectus, blanditiis
            dolorem tempora sunt officia error labore repellat! Voluptatum
            aspernatur consectetur magnam consequuntur necessitatibus distinctio
            minus. Provident tenetur consequuntur tempore autem?
          </p>
        </div>
      </div>
      <div className={css.tarjetas}>
        <div className={css.text}>
          <h2>Cuáles son nuestros objetivos?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quam iste ullam id, at eveniet mollitia. Vel est doloribus
            voluptatibus debitis, libero cum quaerat doloremque veniam odio?
            Magnam, pariatur nostrum? Ea ab laudantium eaque laboriosam minus
            sint ducimus, enim deleniti saepe delectus, tenetur explicabo nihil
            veniam natus dolore sapiente, magnam sequi libero atque dignissimos
            possimus corporis architecto veritatis. Fugit, aliquid! Sapiente
            consectetur libero culpa sint hic placeat in delectus, blanditiis
            dolorem tempora sunt officia error labore repellat! Voluptatum
            aspernatur consectetur magnam consequuntur necessitatibus distinctio
            minus. Provident tenetur consequuntur tempore autem?
          </p>
        </div>
        <Image src={foto1} alt="gym-bro" className={css.img} />
      </div>
      <div className={css.tarjetas}>
        <Image src={foto2} alt="gym-bro" className={css.img} />
        <div>
          <h2>Cuál es nuestra misión?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quam iste ullam id, at eveniet mollitia. Vel est doloribus
            voluptatibus debitis, libero cum quaerat doloremque veniam odio?
            Magnam, pariatur nostrum? Ea ab laudantium eaque laboriosam minus
            sint ducimus, enim deleniti saepe delectus, tenetur explicabo nihil
            veniam natus dolore sapiente, magnam sequi libero atque dignissimos
            possimus corporis architecto veritatis. Fugit, aliquid! Sapiente
            consectetur libero culpa sint hic placeat in delectus, blanditiis
            dolorem tempora sunt officia error labore repellat! Voluptatum
            aspernatur consectetur magnam consequuntur necessitatibus distinctio
            minus. Provident tenetur consequuntur tempore autem?
          </p>
        </div>
      </div>
      <div className={css.tarjetas}>
        <div>
          <h2>Qué ofrecemos para lograrlo?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quam iste ullam id, at eveniet mollitia. Vel est doloribus
            voluptatibus debitis, libero cum quaerat doloremque veniam odio?
            Magnam, pariatur nostrum? Ea ab laudantium eaque laboriosam minus
            sint ducimus, enim deleniti saepe delectus, tenetur explicabo nihil
            veniam natus dolore sapiente, magnam sequi libero atque dignissimos
            possimus corporis architecto veritatis. Fugit, aliquid! Sapiente
            consectetur libero culpa sint hic placeat in delectus, blanditiis
            dolorem tempora sunt officia error labore repellat! Voluptatum
            aspernatur consectetur magnam consequuntur necessitatibus distinctio
            minus. Provident tenetur consequuntur tempore autem?
          </p>
        </div>
        <Image src={foto3} alt="gym-bro" className={css.img} />
      </div>
      <h2>Qué dicen los usuarios que usan nuestra aplicación a diario</h2>
      <div className={css.userCard}>
        <CardUser user={1} stars={[1, 1, 1, 1, 1]} time={30} />
        <CardUser user={2} stars={[1, 1, 1, 1]} time={60} />
        <CardUser user={3} stars={[1, 1, 1, 1, 1]} time={90} />
      </div>
      <div className={css.consult}>
      <h3>Tienés alguna consulta?</h3>
      <Link href={'/consulta'}>
      <button className="btn">
        Contáctanos
      </button>
      </Link>
      </div>
    </div>
  );
}

export default Page;
