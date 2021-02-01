import React, { Component } from "react";
import Form from "./components/form";
import NavBar from "./components/NavBar/NavBar";
import Admin from "./components/Admin/Admin";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/application_form" component={Form} exact />
          <Route path="/Admin" component={Admin} exact />
        </Switch>
      </main>
    );
  }
}

export default App;

{
  /* <NavBar sign_in_out="SIGN IN" />
        <Form /> */
}
