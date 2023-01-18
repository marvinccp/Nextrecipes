import BaseLayout from "./Layouts/Layout";
import styles from '../styles/Index.module.css'
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <BaseLayout title={"Home"} />
      <main className={styles.index_container}>
        <h1>Find the perfect recipe</h1>
        <div className={styles.image_container}>
          <Link href={'/recipes/'}>
            <Image
              className={styles.image}
              src={"/images/chef2.png"}
              alt={"recipes-logo-app"}
              width={800}
              height={800}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority={true}
            />
          </Link>
        </div>
      </main>
    </>
  );
}
