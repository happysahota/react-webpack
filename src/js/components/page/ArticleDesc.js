import React from "react";
import {Link} from "react-router"

export default class Article extends React.Component {
    
    render () {
        
        const {title} = this.props;
        const {desc} = this.props;
        return (
            <div>
                lklklfsd
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        );
    }
}