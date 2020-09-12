import React, { useContext } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAutenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAutenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
