import { IRecipeItem } from "@/types";
import recipes from "../../data.json";
import { RecipeBoard } from "@/components";

export default function Home() {
  return (
    <main>
      <RecipeBoard recipes={recipes as IRecipeItem[]} />
    </main>
  );
}
