import React from 'react'
import BaseLayout from '../Layouts/Layout';
import styles from '../../styles/Recipes.module.css'
import Link from 'next/link'
import Image from 'next/image';





const getData = async () => {
  const data = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
  ).json();
  return data;
};


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
                <h4 >{recipe.strMeal}</h4>
              </Link>
              <Link href={`/recipes/viewrecipes/${recipe.strMeal}`}>
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
                </Link>

                {/* <img src={recipe.strMealThumb} alt={recipe.strMeal} /> */}
         
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default RecipesList