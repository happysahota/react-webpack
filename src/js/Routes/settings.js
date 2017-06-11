import React from "react";
import {Link} from "react-router";

export default class Settings extends React.Component {
    render(){
        const {query} = this.props.location;
        const {name} = query;
        return (
            <div>
                <h1>Settings Route: {name}</h1>
                <Link to="settings?name=happy">Query Demo</Link>
            </div>
        );
    }
}