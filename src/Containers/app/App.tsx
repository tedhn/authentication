import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Home from "../home/home";
import Login from "../login/Login";
import Dashboard from "../dashboard/dashboard";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact render={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
