import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Logo</h1>

      <nav>
        <div className={styles.nav}>
          <p>Home</p>
          <p>Shop Now</p>
          <p>Cart</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
