"use client";
import { ReactNode } from "react";

import styled from "styled-components";

interface ContainerProps {
  $isPageTitle?: boolean;
}

const StyledContainer = styled.section<ContainerProps>`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isPageTitle }) =>
    $isPageTitle ? "flex-start" : "center"};
  justify-content: ${({ $isPageTitle }) =>
    $isPageTitle ? "flex-start" : "center"};
  margin: 24px auto;

  h1 {
    font-size: ${({ $isPageTitle }) => ($isPageTitle ? "28px" : "24px")};
  }

  p.subtitle {
    font-size: 14px;
    margin-top: 16px;
  }

  p.auxiliar-text {
    font-size: 12px;
    color: #aaa;
    margin-bottom: 16px;
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
    <StyledContainer $isPageTitle={isPageTitle}>{children}</StyledContainer>
  );
};
