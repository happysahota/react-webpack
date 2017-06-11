import React from "react";
import {Link} from "react-router";

export default class Settings extends React.Component {
    render(){
        const {query} = this.props.location;
        const {name} = query;
        const queryStyle = {
            color:'red',
            marginLeft:'50px'
        }
        return (
            <div>
                <h1>Settings Route: <span style={queryStyle}>{name}</span></h1>
                <Link to="settings?name=happy">Query Demo</Link>
            </div>
        );
    }
}