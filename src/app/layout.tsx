import type { Metadata } from "next";
import styles from "./page.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs Technical Assesment",
  description: "A modern product listing page featuring interactive product modals, a fully functional shopping cart, and persistent data storage using Local Storage, all seamlessly deployed and hosted on Vercel for fast, reliable performance. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
