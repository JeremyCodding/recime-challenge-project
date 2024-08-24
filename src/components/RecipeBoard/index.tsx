"use client";

import { IRecipeItem } from "@/types/recipes";
import { Container } from "../Container";
import { RecipeGrid } from "../RecipeGrid";
import { RecipeItem } from "../RecipeItem";
import { useState } from "react";
import { ButtonGroup, StyledButton } from "./modules";

export const RecipeBoard = (props: { recipes: IRecipeItem[] }) => {
  const { recipes } = props;
  const [difficulty, setDifficulty] = useState<
    "easy" | "medium" | "hard" | undefined
  >();

  const filteredRecipes = recipes.filter((recipe) =>
    difficulty ? recipe.difficulty === difficulty : recipe
  );

  const handleFilterDifficulty = (value: "easy" | "medium" | "hard") => {
    if (difficulty === value) {
      setDifficulty(undefined);
      return;
    }
    setDifficulty(value);
    return;
  };

  return (
    <Container>
      <h1>Trending Recipes</h1>
      <p>Difficulty</p>
      <p>You can filter recipes by difficulty</p>
      <ButtonGroup>
        <StyledButton
          onClick={() => handleFilterDifficulty("easy")}
          selected={difficulty === "easy"}
        >
          Easy
        </StyledButton>
        <StyledButton
          onClick={() => handleFilterDifficulty("medium")}
          selected={difficulty === "medium"}
        >
          Medium
        </StyledButton>
        <StyledButton
          onClick={() => handleFilterDifficulty("hard")}
          selected={difficulty === "hard"}
        >
          Hard
        </StyledButton>
      </ButtonGroup>
      <RecipeGrid>
        {(filteredRecipes as IRecipeItem[]).map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </RecipeGrid>
    </Container>
  );
};
