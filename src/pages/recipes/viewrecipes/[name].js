import BaseLayout from "@/pages/Layouts/Layout";
import { getData } from "../getData";
import styles from '../../../styles/Recipe.module.css'
import Image from "next/image";


const Recipe = ({ dataRecipe }) => {
  return (
    <>
      <BaseLayout title={"Recipe"} />
      <section className={styles.recipe_container}>
        <h1>{dataRecipe.strMeal}</h1>
        <div className={styles.image_container}>

        <Image
          className={styles.image}
          src={dataRecipe.strMealThumb}
          alt={dataRecipe.strMeal}
          width={600}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority={true}
          />
          </div>
          
      </section>
    </>
  );
};

export default Recipe;

const getAllRecipesNames = async () => {
  const data = await getData();
  const recipes = data.meals;

  return recipes.map((recipe) => {
    return {
      params: {
        name: recipe.strMeal,
      },
    };
  });
};

const getRecipeData = async (name) =>{
const data = await getData();
const recipes = data.meals;
const recipe = recipes.find( item => item.strMeal === name)
console.log(recipe)
return recipe
}

export const getStaticPaths = async () =>{
    const recipes = await getAllRecipesNames()

    return {
        paths: recipes,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) =>{
    const recipe = await getRecipeData(params.name)
    return {
        props:{
            dataRecipe: recipe
        }
    }
}