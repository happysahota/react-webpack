import React from "react";
import ReactDom from "react-dom";

import {Route, HashRouter, Switch } from "react-router-dom";

import Layout from "./components/Layout";

var app = document.getElementById("app");
ReactDom.render(
    <HashRouter>
        <div>
            <Layout/>
        </div>
    </HashRouter>
, app);