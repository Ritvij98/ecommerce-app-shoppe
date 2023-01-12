import React from "react";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
const App = () => {
  const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        {!user ? (
          <Route path="/login">
            <Login />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {!user ? (
          <Route path="/register">
            <Register />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
};

export default App;
