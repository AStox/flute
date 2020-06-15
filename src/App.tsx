import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";
import ToDo from "./ToDo";
import FluteContainer from "./FluteContainer";

import "./App.sass";

const App = () => {
  const toDoItems = ["Edit a note", "Add new line"];

  return (
    <Router>
      <div className="App">
        <Main>
          <Route exact path="/">
            <FluteContainer />
          </Route>
          <Route path="/todo">
            <ToDo items={toDoItems} />
            <Link to="/">Back</Link>
          </Route>
        </Main>
      </div>
    </Router>
  );
};

export default App;
