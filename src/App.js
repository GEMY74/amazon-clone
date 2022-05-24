import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderLog from "./components/header/HeaderLog";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <HeaderLog />
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
