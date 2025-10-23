import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
    </div>
  );
}
