import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RosterInput from "./RosterInput";
import MatchupDisplay from "./MatchupDisplay";
import Main from "./Main";
import ToDo from "./ToDo";

import { stox, steve } from "./Lists";

import './App.sass'

const App = () => {
  const roster1 = stox;
  const roster2 = steve;
  const formatList = (list: string) => list.split(",");

  const toDoItems = ["server", "database", "bulma"];
  return (
    <Router>
      <div className="App">
        <Main>
          <Route path="/todo">
            <ToDo items={toDoItems} />
            <Link to="/">Back</Link>
          </Route>
          <Route exact path="/">
            <MatchupDisplay roster1={formatList(roster1)} roster2={formatList(roster2)} />
            <Link to="/todo">todo</Link>
          </Route>
        </Main>
      </div>
    </Router>
  );
};

export default App;
