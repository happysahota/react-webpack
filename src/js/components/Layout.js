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
    render() {
        setTimeout(()=>{
            this.setState({title:"Welcome...Happy!"});
        }, 3000);
        return (
            <div>
                <Header title={this.state.title} />
                <Footer title={this.state.footer} />
            </div>
        );
    }
}