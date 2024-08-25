"use client";

import { IRecipeItem } from "@/types/recipes";
import { Container } from "../Container";
import { RecipeGrid } from "../RecipeGrid";
import { RecipeItem } from "../RecipeItem";
import { useEffect, useState } from "react";
import { ButtonGroup, StyledButton } from "./modules";

export const RecipeBoard = (props: { recipes: IRecipeItem[] }) => {
  const { recipes } = props;
  const [difficulty, setDifficulty] = useState<
    "easy" | "medium" | "hard" | undefined
  >();
  const [recipesList, setRecipesList] = useState<IRecipeItem[]>(recipes);

  useEffect(() => {
    function orderList(recipes: IRecipeItem[]) {
      const filteredRecipes = recipes
        .filter((recipe) =>
          difficulty ? recipe.difficulty === difficulty : recipe
        )
        .sort((a, b) => a.position - b.position);
      const restList = [
        ...recipes.filter((recipe) =>
          difficulty ? recipe.difficulty !== difficulty : recipe
        ),
      ];

      return filteredRecipes.concat(difficulty ? restList : []);
    }

    setRecipesList(() => orderList(recipes));
  }, [recipes, difficulty]);

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
      <p className="subtitle">Difficulty</p>
      <p className="auxiliar-text">You can filter recipes by difficulty</p>
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
        {recipesList.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </RecipeGrid>
    </Container>
  );
};
