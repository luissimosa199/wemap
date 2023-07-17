import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import Avatar from "../../../public/avatar.png";

import styles from "../../scss/globals.module.scss";

const { styledProfile, avatar, nameAndSince, since, blueBox, buttonProfile } = styles;

export default function Profile() {
  const [userData, setUserData] = useState({
    Nombre: "Julio Flores",
    Email: "julioflores@gmail.com",
    Since: "13/3/2023",
    Contraseña: "******",
    "Puntuaciones y reseñas": [{ Local1: "Reseña 1" }],
    Rango: "",
  });

  return (
    <MainLayout>
      <div className={styledProfile}>
        <Image src={Avatar} className={avatar} />

        <div className={nameAndSince}>
          <h3>{userData.Nombre}</h3>
          <p className={since}> Miembro desde {userData.Since}</p>
        </div>

        <div className={blueBox}>
          <h4>Email: {userData.Email}</h4>
          <h5>Editar</h5>
        </div>
        <div className={blueBox}>
          <h4>Contraseña: {userData.Contraseña}</h4>
          <h5>Editar</h5>
        </div>
        <div className={blueBox}>
          <h4>Puntuaciones y reseñas:</h4>
          <h5>Ver</h5>
        </div>
        <div className={blueBox}>
          <h4>Rango</h4>
        </div>

        <button className={buttonProfile}>Cerrar sesión</button>
      </div>
    </MainLayout>
  );
}
