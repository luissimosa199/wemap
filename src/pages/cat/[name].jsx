import React from "react";
import { useRouter } from "next/router";
import styles from "./[name].module.scss";
import Image from "next/image";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;

  const examples = [
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
    { nombre: "nombre", direccion: "direccion", rating: "4.5", imagen: "src" },
  ];

  return (
    <div className={styles.container}>
      <div>
        <ul>
          {examples &&
            examples.map((e, idx) => (
              <li key={idx}>
                <div className={styles.rating}>{e.rating}</div>
                <p className={styles.nombre}>{e.nombre}</p>
                <p className={styles.direccion}>{e.direccion}</p>
                <div className={styles.imagen}>
                  <Image
                    href={e.imagen}
                    alt={e.nombre}
                    width={20}
                    height={20}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
