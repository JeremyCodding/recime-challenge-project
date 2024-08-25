"use client";

import Image from "next/image";

import { IRecipeItem } from "@/types/recipes";
import styles from "./RecipeItem.module.css";
import { ImageContainer, RecipeCard } from "./modules";

export const RecipeItem = (props: { recipe: IRecipeItem }) => {
  const { id, imageUrl, title, difficulty } = props.recipe;

  return (
    <RecipeCard $difficulty={difficulty}>
      <ImageContainer>
        <Image
          src={imageUrl}
          width={120}
          height={150}
          alt="Recipe Image"
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </ImageContainer>

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.difficulty}>{difficulty}</p>
      </div>
    </RecipeCard>
  );
};
