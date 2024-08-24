"use client";

import styled from "styled-components";

export const ButtonGroup = styled.div`
  button {
    border-radius: 0;
    background-color: #fff;
    padding: 8px;
    width: 150px;
  }

  :first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  :last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const StyledButton = styled.button<{ selected: boolean }>`
  border: none;
  border: 1px solid;
  border-color: ${({ selected }) => (selected ? "#2478ff" : "#aaa")};
`;
