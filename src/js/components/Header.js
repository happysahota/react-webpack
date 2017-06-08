import React from "react";

import Ttitle from "./Header/Title";

export default class Header extends React.Component {
    title = "Header"
    render() {
        return (
            <header>
                <Ttitle title={this.props.title}/>
                <Ttitle title="Default Title"/>
            </header>
        );
    }
}