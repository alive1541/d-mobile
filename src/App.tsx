import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import DashBoard from "./pages/dashboard";
import Button from "./pages/button";
import Modal from "./pages/modal";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/button" component={Button} />
          <Route path="/modal" component={Modal} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
