import Image from "next/image";
import gymBro from "../../public/favicon.ico";
import css from "./NavBar.module.css";
import { FaUser, FaDumbbell } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { useAuthContext } from "../firebase/auth/AuthContext";
import UserMenu from "./UserMenu";
import { signOut } from "../firebase/auth/signIn";

function NavBar() {
  const { user } = useAuthContext();
  const [toogle, setToogle] = React.useState(false);
  const [verify, setVerify] = React.useState(false);

  React.useEffect(() => {
    if (!user) setVerify(false);
    else setVerify(true);
  }, [user]);
  const handleUser = () => {
    if (user && !user.emailVerified){
      alert("Revisa tu correo y verifica tu cuenta!! Te esperamos!!");
      signOut()}
    else setToogle(!toogle);
  };
  return (
    <nav className={css.container}>
      <div>
        <Image className={css.img} alt="Gym-Bro" src={gymBro} />
      </div>
      <div className={css.box}>
        <ul className={css.ul}>
          <li className={css.li}>
            <Link href="/">Inicio</Link>
          </li>
          <li className={css.li}>
            <Link href="/quienesSomos">Quienes Somos?</Link>
          </li>
          <li className={css.li}>
            <Link href="/clasesgratuitas">Clases Gratuitas</Link>
          </li>
          <li className={css.li}>
            <Link href="/sedes">Sedes</Link>
          </li>
        </ul>
        <Link href="/mis_rutinas">
          <FaDumbbell className={css.user} />
        </Link>

        <FaUser className={css.user} onClick={handleUser} />
        {toogle ? (
          <div className={css.menu}>
            <UserMenu
              user={verify}
              name={user && user?.displayName}
              toogle={toogle}
              setToogle={setToogle}
            />
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
