import React from "react";

import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor(){
        super();
        this.state = {
                        title:"Welcome...!",
                        footer:"footer from Layout"
                    };
                    
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Delhi,us&appid=726faf11f86f63988b94479c15e877c5&units=metric").then(function(data){
            console.log(data);
        });
    }

    changeHandler(title){
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header changeHandler={this.changeHandler.bind(this)} title={this.state.title} />
                <Footer title={this.state.footer} />
            </div>
        );
    }
}