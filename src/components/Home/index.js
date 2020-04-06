import React from "react";
import Body from "../Body";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className="App">
      <header className={css.header}>
        <br />
        <h1>Charlie 'Catleesi' Mayne</h1>
        <h2>Aspiring coder, and Mother of Cats</h2>
      </header>
      <body>
        <Body />
      </body>
      <footer className={css.footer}>
        <a
          className={css.footer}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hard nope, back to Google plz
        </a>
      </footer>
    </div>
  );
};

export default Home;
