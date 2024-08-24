"use client";

import { Container } from "../Container";
import styles from "./Header.module.css";

export const HeaderComponent = (props: { pageTitle: string }) => {
  const { pageTitle } = props;
  return (
    <header className={styles.headerComponent}>
      <Container>
        <h1>{pageTitle}</h1>
      </Container>
    </header>
  );
};
