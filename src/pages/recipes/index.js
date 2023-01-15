import React from 'react'
import BaseLayout from '../Layouts/Layout';
import styles from '../../styles/Recipes.module.css'
const RecipesList = () => {
  return (
    <>
      <BaseLayout title={"Recipes"} />
      <main className={styles.recipes_container}>
        <h1>Recipes</h1>
      </main>
    </>
  );
}

export default RecipesList