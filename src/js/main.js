import React from "react";
import ReactDom from "react-dom";

import {Route, Router, IndexRoute, hashHistory} from "react-router"

import Layout from "./components/Layout"

// pages
import Indexpage from "./pages/Indexpage"
import Articlepage from "./pages/Articlepage";

var app = document.getElementById("app");
ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Indexpage}></IndexRoute>
            <Route path="article(/:articleid)" component={Articlepage}></Route>
        </Route>
    </Router>
, app);