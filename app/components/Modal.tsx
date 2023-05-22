import React from "react";
import { useRouter } from "next/navigation";

interface props {
  children: JSX.Element | JSX.Element[];
}
export const Modal = ({ children }: props) => {
  const router = useRouter();

  const handlerClose = (e: React.MouseEvent<HTMLDivElement>) => {
    router.push("/");
  };
  return (
    <article onClick={handlerClose} className="modal">
      {children}
    </article>
  );
};
