import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <Route component={Nav} />
        </nav>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/books/" component={Books} />
        <Route path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;