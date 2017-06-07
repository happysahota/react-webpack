import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
        render() {
            return (
                <h1>Here is the title</h1>
            );
        }
}

var app = document.getElementById("app");
ReactDom.render(<Layout/>, app);