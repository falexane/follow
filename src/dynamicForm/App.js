import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import { registerForm, loginForm } from "./UI/Form/formElements";

const Fruits = lazy(() => import("./components/Fruits/Fruits"));
const AuthenticationForm = lazy(() =>
  import("./components/AuthenticationForm/AuthenticationForm")
);

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Fruits />} />
          <Route
            exact
            path="/register"
            render={() => (
              <AuthenticationForm
                action="register"
                formTitle="Registration"
                buttonText="Register"
                formStructure={registerForm}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <AuthenticationForm
                action="login"
                formTitle="Login"
                buttonText="Login"
                formStructure={loginForm}
              />
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
