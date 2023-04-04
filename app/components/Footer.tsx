import Image from "next/image";
import gymBro from "../../public/favicon.ico";
import css from "./Footer.module.css";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

function Footer() {
  return (
    <footer className={css.container}>
      <div className={css.box}>
        <Image className={css.img} alt="Gym-Bro" src={gymBro} />
        <ul className={css.ul}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/quienesSomos">Quienes Somos?</Link>
          </li>
          <li>
            <Link href="/clasesgratuitas">Clases Gratuitas</Link>
          </li>
          <li>
            <Link href="/sedes">Sedes</Link>
          </li>
        </ul>
        <div className={css.social}>
          <h2>Contáctanos</h2>
          <div className={css.icons}>
            <div className={css.round}>
              <Link href="https://www.instagram.com" target="--blanc">
                <RiInstagramFill className={css.icon} />
              </Link>
            </div>
            <div className={css.round}>
              <Link href="https://www.facebook.com" target="--blanc">
                <IoLogoFacebook className={css.icon} />
              </Link>
            </div>
            <div className={css.round}>
              <Link href="https://web.whatsapp.com/" target="--blanc">
                <IoLogoWhatsapp className={css.icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.copy}>
        <small>&copy; GymBro - 2023. All rights reserve.</small>
      </div>
    </footer>
  );
}

export default Footer;
