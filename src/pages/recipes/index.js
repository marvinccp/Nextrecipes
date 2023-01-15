import React from 'react'
import BaseLayout from '../Layouts/Layout';
import styles from '../../styles/Recipes.module.css'
import {getData} from './getData'

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
        <h1>Recipes</h1>
      <main className={styles.recipes_container}>
        {
          recipes.meals.map( recipe =>(

            <article key={recipe.idMeal}>
              <div>
                <h4>{recipe.strMeal}</h4>
              </div>

            </article>
          ))
        }
      </main>
    </>
  );
}

export default RecipesList