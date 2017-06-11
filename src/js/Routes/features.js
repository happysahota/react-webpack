import React from "react";
import {Link} from "react-router";

export default class Features extends React.Component {
    render(){
        let {feature} = this.props.params; //es6 fnctionality to pull key out of obj. this will pull 'feature' out of params and assign to 'feature' variable
        console.log(feature);
        return (
            <div>
                <h1>Features Route {feature}</h1>
                <Link to="features/feature-details">Go Details</Link>
            </div>
        );
    }
}