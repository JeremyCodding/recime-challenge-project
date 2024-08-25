"use client";

import { breakpoints } from "@/style/consts";
import styled, { css } from "styled-components";

export const RecipeGrid = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 540px;
  max-width: 1024px;

  ${css`
    @media (max-width: ${breakpoints.tablet}) {
      width: 460px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 260px;
      gap: 8px;
    }
  `}
`;
