import recipes from "../../data.json";
import { RecipeItem } from "@/components";

export default function Home(params: any[]) {
  return (
    <main>
      <section className="card-list">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
