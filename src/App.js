import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Payment from "./pages/Payment";
import lesson from "./pages/lesson";

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/attandance" component={Attendance} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/lesson" component={lesson} />
      </Switch>
    )
  }
}