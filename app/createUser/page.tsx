"use client";
import React from "react";
import signUp from "../firebase/auth/signup";
import Logo from "../../public/favicon.ico";
import Image from "next/image";
import { Modal } from "../components/Modal";
import css from "./createUser.module.css";

function Page() {
  const [file, setFile] = React.useState({});
  const [input, setInput] = React.useState({
    name: "", // debe ser first_name
    lastname: "", // debe ser last_name
    email: "",
    password: "",
    repassword: "", // debe ser confirm
  });
  //console.log(file);
  const postUser = async (idToken: string, providerId: string) => {
    const user = { ...input, providerId };
    const result = await fetch(
      "http://localhost:5001/gymbro/us-central1/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          Authorization: "Bearer " + idToken,
        },
        body: JSON.stringify(user),
      }
    );
    return result.json();
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { result, error } = await signUp(input.email, input.password);

    if (error) {
      return console.log(error);
    }
    const providerId = result?.user.providerId;
    const idToken = await result?.user.getIdToken();
    if (idToken !== undefined && providerId !== undefined) {
      const res = await postUser(idToken, providerId);
      console.log(res);
    }
    error
      ? alert("su usuario no pudo ser creado")
      : alert("su usuario se creo correctamente");
  };

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };
  const handleFileChange = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const input = files && files[0];
    console.log(input);
    if (!input) return;
    const data = new FormData();
    data.append("foto", input.name);
    setFile(data);
    console.log("formdata", data);
  };

  return (
    <Modal>
      <div className="container">
        <div className={css.primaryContainer}>
          <Image alt="Gym-Bro" src={Logo} className={css.img} />
          <div className={css.container}>
            <h3>Registro</h3>
            <form onSubmit={handleForm} className={css.form}>
              <label htmlFor="name">
                <p>Nombre:</p>
                <input
                  onChange={handleInputChange}
                  required
                  minLength={3}
                  value={input.name}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="  Nombre..."
                />
              </label>
              <label htmlFor="lastname">
                <p>Apellido:</p>
                <input
                  onChange={handleInputChange}
                  required
                  minLength={3}
                  value={input.lastname}
                  type="name"
                  name="lastname"
                  id="lastname"
                  placeholder="  Apellido..."
                />
              </label>
              <label htmlFor="email">
                <p>Correo electronico:</p>
                <input
                  onChange={handleInputChange}
                  required
                  value={input.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="  Correo..."
                />
              </label>
              <label htmlFor="password">
                <p>Contraseña:</p>
                <input
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  maxLength={24}
                  value={input.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="  Contraseña..."
                />
              </label>
              <label htmlFor="repassword">
                <p>Confirmar Contraseña:</p>
                <input
                  onChange={handleInputChange}
                  required
                  value={input.repassword}
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="  Confirmar contraseña..."
                />
              </label>
              <label htmlFor="user-image">
                <p>Foto de perfil:</p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg"
                  id="file"
                  name="file"
                />
              </label>
              <p>Estas listo para empezar?</p>
              <button type="submit" className="btn">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Page;

// import React, { useState } from 'react';

// const FileUploadForm = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('archivo', selectedFile);

//     const idToken = 'tu_id_token'; // Reemplaza esto con tu propio token de autorización

//     fetch('/ruta/del/servidor', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Bearer ' + idToken,
//         // Establecer el Content-Type adecuado
//         // para el envío de archivos en FormData
//         // y dejar que el navegador genere los límites
//         // de multipart automáticamente
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Archivo enviado exitosamente.', response);
//           // Realizar acciones adicionales después de recibir la respuesta del servidor
//         } else {
//           console.error('Error al enviar archivo.', response);
//           // Realizar acciones adicionales en caso de error
//         }
//       })
//       .catch(error => {
//         console.error('Error al enviar archivo.', error);
//         // Realizar acciones adicionales en caso de error
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <input type="file" name="archivo" onChange={handleFileChange} />
//       {/* Agrega otros campos de formulario según tus necesidades */}
//       <input type="submit" value="Enviar" />
//     </form>
//   );
// };

// export default FileUploadForm;
