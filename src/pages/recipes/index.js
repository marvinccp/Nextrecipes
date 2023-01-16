import React from 'react'
import BaseLayout from '../Layouts/Layout';
import styles from '../../styles/Recipes.module.css'
import {getData} from './getData'
import Link from 'next/link'
import Image from 'next/image';



export const getStaticProps = async () =>{

const recipes = await getData()
console.log(recipes);
return{
    props:{
        recipes
    }
}
}

const RecipesList = ({ recipes }) => {
  return (
    <>
      <BaseLayout title={"Recipes"} />
      <div className={styles.titlecontainer}>
        <h1>Recipes</h1>
      </div>
      <main className={styles.recipes_container}>
        {recipes.meals.map((recipe) => (
          <article key={recipe.idMeal}>
            <div>
              <Link href={`/recipes/viewrecipes/${recipe.strMeal}`}>
                <h4>{recipe.strMeal}</h4>
              </Link>
              <Link href={"/recipes"}>
                <Image
                  className={styles.image}
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={500}
                  height={500}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority={true}
                />
                {/* <img src={recipe.strMealThumb} alt={recipe.strMeal} /> */}
              </Link>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default RecipesList