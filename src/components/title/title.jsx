import React, { useContext } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export const Title = ({ text}) => {
  return (
    <>
      <div className={styles.title} >
        <h1 className={styles.text}>{text}</h1>
      </div>
    </>
  );
};
