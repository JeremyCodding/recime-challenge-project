import Image from "next/image";
import recipes from "../../data.json";

export default function Home(params: any[]) {
  return (
    <main>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
            <Image
              src={recipe.imageUrl}
              alt="Burget Image"
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
