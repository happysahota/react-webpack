import React from "react";

import Ttitle from "./Header/Title";

export default class Header extends React.Component {
    title = "Header"
    
    handleIt(e){
        let title = e.target.value;
        this.props.changeHandler(title);
    }

    render() {
        return (
            <header>
                <Ttitle title={this.props.title}/>
                <input onChange={this.handleIt.bind(this)} />
            </header>
        );
    }
}