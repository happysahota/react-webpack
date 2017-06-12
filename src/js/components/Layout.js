import React from "react";

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
        console.log(this.props);
        return (
            <div>
                <Header changeHandler={this.changeHandler.bind(this)} title={this.state.title} />
                    {this.props.children}
                <Footer title={this.state.footer} />
            </div>
        );
    }
}