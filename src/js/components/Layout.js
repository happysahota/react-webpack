import React from "react"
import {Route, Link} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Indexpage from "../pages/Indexpage";
import Articlepage from "../pages/Articlepage";

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

    toggleBack() {
        let showBack = !this.state.showBack;
        this.setState({showBack});
    }

    render() {
        return (
            <div>
                <Header changeHandler={this.changeHandler.bind(this)} title={this.state.title} />
                {
                    this.state.showBack ? <Link to='..' onClick={this.toggleBack.bind(this)}>Back..</Link> : <Indexpage backHandler={this.toggleBack.bind(this)} />
                }
                <Route path="/article/:articleid" component={Articlepage}></Route>
                <Footer title={this.state.footer} />
            </div>
        );
    }
}