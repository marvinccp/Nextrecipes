import BaseLayout from "./Layouts/Layout";
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <BaseLayout title={'Home'} />
      <main className={styles.index_container}>
        <h1>Eyy</h1>
        <h3>Aquí encontrarás recetas</h3>
      </main>
    </>
  );
}
