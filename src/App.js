import React, { useState } from "react";
import "./App.css";
import Login from "./component/login";
import Admin from "./component/admin/admin";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

// const [user, setUser] = useState("");
// const [password, setPassword] = useState("");

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticate === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login
                {...props}
                setAuthenticate={setAuthenticate}
                authenticate={authenticate}
              />
            )}
          />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
