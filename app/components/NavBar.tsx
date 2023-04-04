import Image from "next/image";
import gymBro from "../../public/favicon.ico";
import css from "./NavBar.module.css";
import { FaUser, FaDumbbell } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
  return (
    <nav className={css.container}>
      <div>       
        <Image className={css.img} alt="Gym-Bro" src={gymBro} />
      </div>
      <div className={css.box}>
        <ul className={css.ul}>
          <li className={css.li}>
          <Link href='/'>
           Inicio 
          </Link>
           </li>
          <li className={css.li}>
          <Link href='/quienesSomos'>
             Quienes Somos?
          </Link>
              </li>
          <li className={css.li}> 
          <Link href='/clasesgratuitas'>
          Clases Gratuitas 
          </Link>
          </li>
          <li className={css.li}>
          <Link href='/sedes'>

             Sedes 
          </Link>
             </li>
        </ul>
        
        <FaDumbbell className={css.user} />
        
        
        <FaUser className={css.user} />
        
      </div>
    </nav>
  );
}

export default NavBar;
