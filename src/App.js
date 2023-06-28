import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ExercisesDetailes from "./component/ExercisesDetailes";
import Exercises from "./component/Exercises";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Basepage from "./component/Basepage";
import Notfound from "./component/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Basepage} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <Route path="/home" exact Component={Home} />
        <Route path="/exercises" exact Component={Exercises} />
        <Route path="/exercises/:id" exact Component={ExercisesDetailes} />
        <Route path="*" Component={Notfound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
