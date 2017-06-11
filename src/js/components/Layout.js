import React from "react";

import {IndexLink, Link} from "react-router";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
                        title:"Welcome...!",
                        footer:"footer from Layout"
                    };
    }

    changeHandler(title){
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header changeHandler={this.changeHandler.bind(this)} title={this.state.title} />
                <IndexLink to="/">main</IndexLink>
                <Link to="features">Features</Link>
                <Link to="settings">Settings</Link>
                {this.props.children}
                <Footer title={this.state.footer} />
            </div>
        );
    }
}