import BaseLayout from "@/pages/Layouts/Layout";
import { getData } from "../getData";
import styles from "../../../styles/Recipe.module.css";
import Image from "next/image";

const Recipe = ({ dataRecipe }) => {

  const noIngredient = "🥣";
  const noValue = "🍴";
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
            width={800}
            height={800}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            priority={true}
          />
        </div>
        <div className={styles.ingredients_container}>
          <div className={styles.ingredients_title}>
            <h2>ingredients</h2>
          </div>
          <ul>
            <li>
              {dataRecipe.strIngredient1 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure1 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient2 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure2 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient3 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure3 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient4 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure4 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient5 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure5 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient6 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure6 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient7 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure7 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient8 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure8 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient9 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure9 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient10 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure10 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient11 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure11 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient12 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure12 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient13 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure13 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient14 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure14 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient15 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure15 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient16 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure16 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient17 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure17 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient18 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure18 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient19 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure19 || noValue}</span>
            </li>
            <li>
              {dataRecipe.strIngredient20 || noIngredient} :{" "}
              <span>{dataRecipe.strMeasure20 || noValue}</span>
            </li>
          </ul>
        </div>
        <h2 className={styles.strInstructions_title}>Instructions</h2>
        <p className={styles.instructions}>{dataRecipe.strInstructions}</p>
        <h2 className={styles.strInstructions_title}>Source</h2>
        <a
          className={styles.source_link}
          rel="noreferrer"
          target="_blank"
          href={dataRecipe.strSource}
        >
          {dataRecipe.strSource || "No source"}
        </a>
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

const getRecipeData = async (name) => {
  const data = await getData();
  const recipes = data.meals;
  const recipe = recipes.find((item) => item.strMeal === name);
  console.log(recipe);
  return recipe;
};

export const getStaticPaths = async () => {
  const recipes = await getAllRecipesNames();

  return {
    paths: recipes,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const recipe = await getRecipeData(params.name);
  return {
    props: {
      dataRecipe: recipe,
    },
  };
};
