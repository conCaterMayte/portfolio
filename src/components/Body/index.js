import React from "react";
import css from "./Body.module.css";

const Body = () => {
  return (
    <div className={css.Body}>
      <p>Welcome to my portfolio!</p>
      <p>
        Hello! My name is Charlie. I am a budding coder with a love of quirky
        projects. <br /> This is my portfolio.
      </p>
      <a href="/portfolio" alt="Portfolio">
        Click here to see my portfolio
      </a>
    </div>
  );
};

export default Body;
