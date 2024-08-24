import { IRecipeItem } from "@/types/recipes";
import recipes from "../../data.json";
import { RecipeGrid, RecipeItem } from "@/components";
import { RecipeBoard } from "@/components/RecipeBoard";

export default function Home() {
  return (
    <main>
      <RecipeBoard recipes={recipes as IRecipeItem[]} />
    </main>
  );
}
