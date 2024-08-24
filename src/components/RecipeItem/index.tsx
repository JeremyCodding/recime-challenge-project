import Image from "next/image";

import { IRecipeItem } from "@/types/recipes";
import styles from "./RecipeItem.module.css";

export const RecipeItem = (props: { recipe: IRecipeItem }) => {
  const { id, imageUrl, title, difficulty } = props.recipe;

  return (
    <div
      key={id}
      className={`${styles.recipeCard} ${
        difficulty === "hard" && styles.hard
      } ${difficulty === "medium" && styles.medium} ${
        difficulty === "easy" && styles.easy
      }`}
    >
      <div className={styles.image}>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Recipe Image"
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p>{difficulty}</p>
      </div>
    </div>
  );
};
