import React from "react";
import css from "./Portfolio.module.css";
import Projects from "./Projects.js";

const Portfolio = () => {
  return (
    <div className={css.Portfolio}>
      <h1>Portfolio</h1>
      <Projects />
    </div>
  );
};

export default Portfolio;
