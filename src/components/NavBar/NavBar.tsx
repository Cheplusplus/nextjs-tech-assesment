import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>test</h1>
      <Image src="/next.svg" alt="test" width={100} height={100} />
    </div>
  );
};

export default Navbar;
