import React from "react";
import ReactDom from "react-dom";
import {Route, Router, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";

//Route related
import Main from "./Routes/main";
import Features from "./Routes/features";
import Settings from "./Routes/settings";

var app = document.getElementById("app");
ReactDom.render(
<Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Main}></IndexRoute>
        <Route path="features/:feature" component={Features}></Route>
        <Route path="settings" component={Settings}></Route>
    </Route>
</Router>
, app);