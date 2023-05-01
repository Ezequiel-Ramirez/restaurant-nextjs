import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="telephone logo" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>HACÉ TU PEDIDO!</div>
          <div className={styles.text}>11 5555 6666</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Inicio</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="160" height="69" />
          <li className={styles.listItem}>Eventos</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacto</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
