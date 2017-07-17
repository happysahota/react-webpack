import React from "react"
import {Link} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
                        title:"Welcome...!",
                        footer:"footer from Layout",
                        showBack: false
                    };
    }

    changeHandler(title){
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header changeHandler={this.changeHandler.bind(this)} title={this.state.title} />
                    {
                        this.state.showBack ? <Link to='..'>Back..</Link> : null
                    }
                    {this.props.children}
                <Footer title={this.state.footer} />
            </div>
        );
    }
}