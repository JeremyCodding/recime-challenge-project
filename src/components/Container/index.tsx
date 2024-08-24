"use client";
import { ReactNode } from "react";

import styled from "styled-components";

interface ContainerProps {
  isPageTitle?: boolean;
}

const StyledContainer = styled.section<ContainerProps>`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: ${({ isPageTitle }) => (isPageTitle ? "flex-start" : "center")};
  justify-content: ${({ isPageTitle }) =>
    isPageTitle ? "flex-start" : "center"};
  margin: 0 auto;

  h1 {
    font-size: ${({ isPageTitle }) => (isPageTitle ? "28px" : "24px")};
  }
`;

export const Container = ({
  children,
  isPageTitle,
}: {
  children: ReactNode;
  isPageTitle?: boolean;
}) => {
  return (
    <StyledContainer isPageTitle={isPageTitle}>{children}</StyledContainer>
  );
};
