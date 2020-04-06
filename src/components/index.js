import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "./App.css";
import Home from "./Home";
// import Body from "./Body/index.js";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <Router>
      <div className={css.header}>
        <nav className={css.navbar}>
          <h1>Charlie Mayne</h1>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            {/* <a className={css.text} href="/about"> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/Portfolio">
            <Portfolio />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
