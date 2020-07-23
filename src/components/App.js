import React from "react";
import Header from "./common/Header";
import Home from "./Home/Home";
import CoursesPage from "./Courses/CoursesPage";
import About from "./About/About";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
