import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function UnProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => {
        if (props.loading) return <Preloader />;
        return !props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/movies" />
        );
      }}
    </Route>
  );
}

export default UnProtectedRoute;
