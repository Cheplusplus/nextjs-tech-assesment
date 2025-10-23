import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Logo</h1>

      <nav>
        <div className={styles.nav}>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/product-listings"}>
            <p>Shop Now</p>
          </Link>
          <Link href={"/cart"}>
            <p>Cart</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
