import React from "react";
import ReactDom from "react-dom";

import Layout from "./components/Layout";
import "../scss/style.scss";
import "bulma";

var app = document.getElementById("app");
ReactDom.render(<Layout/>, app);