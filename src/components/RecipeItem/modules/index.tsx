import styled from "styled-components";

interface RecipeCardProps {
  $difficulty: "easy" | "medium" | "hard";
}

export const RecipeCard = styled.div<RecipeCardProps>`
  border: 1px solid;
  border-color: ${({ $difficulty }) =>
    $difficulty === "hard"
      ? "#ff0000"
      : $difficulty === "medium"
      ? "#2478ff"
      : "#050505"};
  color: ${({ $difficulty }) =>
    $difficulty === "hard"
      ? "#ff0000"
      : $difficulty === "medium"
      ? "#2478ff"
      : "#050505"};
  background-color: #fff;
  border-radius: 12px;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  &:hover {
    box-shadow: 0 0 8px 4px
      ${({ $difficulty }) =>
        $difficulty === "hard"
          ? "#ff0000"
          : $difficulty === "medium"
          ? "#2478ff"
          : "#050505"};
  }

  &:hover:nth-child(even) {
    border-radius: 8px;
    transform: rotate(-5deg);
  }
  &:hover:nth-child(odd) {
    border-radius: 8px;
    transform: rotate(5deg) scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
