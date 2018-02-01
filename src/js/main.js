import React from "react";
import ReactDom from "react-dom";

import Layout from "./components/Layout";
import "bulma";
import "../scss/style.scss";

var app = document.getElementById("app");
ReactDom.render(<Layout/>, app);