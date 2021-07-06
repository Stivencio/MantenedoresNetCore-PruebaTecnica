import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FormUsuario from "../views/forms/FormUsuario";
import FormUsuarioObservaciones from "../views/forms/FormUsuarioObservaciones";
import EstadoUsuario from "../views/data/EstadoUsuario";
import Nacionalidades from "../views/data/Nacionalidades";
import Navbar from "../common/Navbar";
import Home from "../common/Home";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forms/FormUsuario" component={FormUsuario} />
          <Route
            exact
            path="/forms/FormUsuarioObservaciones"
            component={FormUsuarioObservaciones}
          />
          <Route exact path="/data/EstadoUsuario" component={EstadoUsuario} />
          <Route exact path="/data/Nacionalidades" component={Nacionalidades} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
