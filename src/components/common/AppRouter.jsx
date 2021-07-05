import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FormUsuario from "../FormUsuario";
import FormUsuarioObservaciones from "../FormUsuarioObservaciones";
import EstadoUsuario from "../EstadoUsuario";
import Nacionalidades from "../Nacionalidades";
import Navbar from "./Navbar";
import Home from "./Home";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/FormUsuario" component={FormUsuario} />
          <Route
            exact
            path="/FormUsuarioObservaciones"
            component={FormUsuarioObservaciones}
          />
          <Route exact path="/EstadoUsuario" component={EstadoUsuario} />
          <Route exact path="/Nacionalidades" component={Nacionalidades} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
