import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => {
        if (props.loading) return <Preloader />;
        return props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    </Route>
  );
}

export default ProtectedRoute;
