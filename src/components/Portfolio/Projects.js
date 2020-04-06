import React from "react";
import css from "./Projects.module.css";
function Projects() {
  function launchTransSiberianWalk() {
    window.open("https://www.google.com");
  }
  function launchPokedex() {
    window.open("https://www.google.com");
  }
  function launchDiceRoller() {
    window.open("https://www.google.com");
  }
  function launchQuiz() {
    window.open("https://github.com/conCaterMayte/verbose-tribble");
  }
  function launchTree() {
    window.open(
      "https://github.com/conCaterMayte/front-end-week-8-project-team-scissors"
    );
  }
  function launchBenaroo() {
    window.open(
      "https://github.com/SchoolOfCode/game-creation-alexa-charlotte"
    );
  }
  return (
    <div className={css.wrapper}>
      <button className={css.projectBox} onClick={launchTransSiberianWalk}>
        Walk the Trans-Siberian Express Route
      </button>
      <button className={css.projectBox} onClick={launchBenaroo}>
        Benaroo Game (a School of Code themed Buckaroo clone)
      </button>
      <button className={css.projectBox} onClick={launchPokedex}>
        Pokedex
      </button>
      <button className={css.projectBox} onClick={launchTree}>
        WMCA Tree Project
      </button>
      <button className={css.projectBox} onClick={launchDiceRoller}>
        Dice Rolling app
      </button>
      <button className={css.projectBox} onClick={launchQuiz}>
        Quiz
      </button>
    </div>
  );
}
export default Projects;
