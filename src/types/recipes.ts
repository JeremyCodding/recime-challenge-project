export interface IRecipeItem {
  title: string;
  difficulty: "easy" | "medium" | "hard";
  imageUrl: string;
  id: number;
  position: number;
}
