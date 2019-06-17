import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Button from "./pages/button";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={Button} />
          <Route path="/button" component={Button} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
