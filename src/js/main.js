import React from "react";
import ReactDom from "react-dom";

import {Route, HashRouter, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Indexpage from "./pages/Indexpage";
import Articlepage from "./pages/Articlepage";

var app = document.getElementById("app");
ReactDom.render(
    <HashRouter>
        <div>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Indexpage}/>
                    <Route path="/article/:articleid" component={Articlepage}></Route>
                </Switch>
            </Layout>
        </div>
    </HashRouter>
, app);