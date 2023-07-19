import styles from "./categories.module.scss";
import Link from "next/link";

const categories = [
  "Carnicería",
  "Kiosco/Almacén",
  "Verdulería",
  "Cines/Teatros",
  "Panadería",
  "Farmacia",
  "Ferretería",
  "Plazas",
  "Supermercados",
  "Veterinarias",
  "Shoppings",
  "Restaurantes",
];

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}></div>

      <ul>
        {categories &&
          categories.map((e, idx) => (
            <li key={idx}>
              <Link href={`/cat/${e.toLocaleLowerCase().replace("/", "-")}`}>
                {e}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
