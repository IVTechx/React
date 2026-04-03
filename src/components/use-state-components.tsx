// import { useState } from "react";
import styles from "../card.module.css";

const UseStateComponent = ({
  i,
  name,
  title,
}: {
  i: number;
  name: string;
  title: string;
}) => {
  console.log("Child rendered");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img
          src={`../src/assets/${i}.png`}
          alt={name}
        />{" "}
      </div>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
    </div>
  );
};

export default UseStateComponent;
